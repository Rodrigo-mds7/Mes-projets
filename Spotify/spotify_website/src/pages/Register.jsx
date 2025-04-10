import { useState } from 'react';

export default function Register(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer un POST a notre api de register
        fetch('http://localhost:5001/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // Transforme nos données en JSON pour mieux les traiter après
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);
            console.log("Réponse de l'API :", data);
        })

    }

    return(

        <div className='bg-slate-800 text-slate-100 h-screen'>
            <div className='flex items-center gap-12'>
                <form onSubmit={handleSubmit} className='bg-black/10 w-full'>
                    <input
                        className='bg-slate-900 text-slate-100 rounded border-2 border-slate-800 px-2 py-1 m-2'
                        type="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='bg-slate-900 text-slate-100 rounded border-2 border-slate-800 px-2 py-1 m-2'
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='bg-slate-900 text-slate-100 rounded border-2 border-slate-800 px-2 py-1 m-2'
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
            <h1 className='px-12 py-2 m-4 text-bold italic bg-black/10 rounded w-max'>{message}</h1>
        </div>
    )
}