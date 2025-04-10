const express = require("express")

const dotenv = require("dotenv")
dotenv.config()
const mysql = require("mysql2")
const jwt = require("jsonwebtoken");

const port = process.env.PORT
const app = express();
const bcrypt = require("bcryptjs");
const cors = require('cors');


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());



let db = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
});

db.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log("connection DB !")
    }
})


const checkIfUserExists = async (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * from users WHERE email = ?', [email], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            console.log(rows);
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve(null);
            }
        });
    });
}

const insertUser = async (username, email, password) => {

    const hashedPassword = await bcrypt.hash(password, 10);

    password = hashedPassword;
    
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err) => {
            if(err)
                reject(err);
            resolve(1);
        });
    });
}

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

//routes


app.get("/", (req, res) => {
    res.send("api working !")
})

app.get("/protected/user", (req, res) => {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer ")) {
        token = token.slice(7);
    }

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    // verif de la signature du token
    // si le token est valide, on renvoie les infos de l'utilisateur
    // et decoded c le payload du token // en gros il contient les datas du token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        const userId = decoded.id;
        db.query('SELECT id, username, email FROM users WHERE id = ?', [userId], (err, rows) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Database error" });
            }
            if (rows.length > 0) {
                return res.status(200).json(rows[0]);
            } else {
                console.log("User not found");
                return res.status(404).json({ message: "User not found" });
            }
        });
    });
});



app.post("/auth/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Tous les champs ne sont pas remplis" });
        }

        const existingUser = await checkIfUserExists(email);
        if (existingUser) {
            return res.status(500).json({ message: "L'utilisateur existe déjà !" });
        } else {
            await insertUser(username, email, password);
            return res.status(201).json({ message: "L'utilisateur a bien été créé !" });
        }
    } catch (err) {
        return res.status(500).json({ message: "register failed" });
    }
});


app.post("/auth/login", async (req, res) => {

    const { email, password } = req.body;

    try {
        if(!email || !password){
            return(res.status(400).json({ message: "Tous les champs ne sont pas remplis" }))
        }
        const user = await checkIfUserExists(email);
        if(!user){
            return(res.status(500).json({ message: "L'utilisateur n'existe pas !"}))
        }else if(user){
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                return(res.status(500).json({ message: "Le mot de passe est incorrect !"}))
            }else{
                const token = generateToken(user);
                return(res.status(200).json({ message: "login parfait !", token: token, user: { id: user.id, username: user.username, email: user.email } }))
            }
        }


    } catch (err) {
        return(res.status(500).json({ message: "login failed" }))
    }
})


app.listen(port, () => {
    console.log("serveur en ligne !")
})

