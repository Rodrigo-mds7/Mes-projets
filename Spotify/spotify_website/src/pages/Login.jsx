import React, { useState } from 'react';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const token = localStorage.getItem('token');
    console.log("test", token);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer un POST a notre api de register
        fetch('http://localhost:5001/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);

            if(data.token){
                localStorage.setItem('token', data.token);
            }
            console.log("Réponse de l'API :", data);
        })

    }

    return(
        <div className='bg-slate-800 text-slate-100 h-screen '>
            <div className='flex items-center gap-12'>
                <form className='bg-black/10 w-full' onSubmit={handleSubmit}>
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
                    <button type="submit" >Se connecter</button>
                </form>
            </div>
            <h1 className='px-12 py-2 m-4 text-bold italic bg-black/10 rounded w-max'>{message}</h1>
        </div>
    )
}