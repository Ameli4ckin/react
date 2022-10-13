import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/firebase";

export const SignUp: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)
            await signUp(login, password)
            navigate('/signin');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } 
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <p>Ligin:</p>
                <input 
                    type="email" 
                    onChange={e => setLogin(e.target.value)} 
                    value={login} 
                    required
                />
                <p>Password:</p>
                <input 
                    type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    value={password} 
                    required
                    pattern="[a-zA-Z0-9_-]{6,}"
                    onInvalid={(e) => (
                        e.target as HTMLInputElement)
                        .setCustomValidity('min length to be 6'
                    )}
                />
                <br />
                <button>Create user</button>
            </form>
            {loading && <CircularProgress />}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    );
};