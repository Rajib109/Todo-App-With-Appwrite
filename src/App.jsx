import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice'; // Import your login action
import authService from './appwrite/auth'; // Import your service

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For signup
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // 1. Call your async service
            const session = await authService.login(email, password);
            console.log("Session::",session)
            
            if (session) {
                // 2. Get the user data
                const userData = await authService.getAccount();
                if (userData) {
                    // 3. Dispatch your synchronous action
                    dispatch(login(userData));
                    console.log("Userdata::",userData)
                } else {
                    setError("Failed to get user data after login.");
                }
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async(e)=>{
        e.preventDefault();
        setError(null);
        setLoading(true)

        try {
            const result = await authService.createAccount(email,password)
            console.log("result::",result) 
        } catch (error) {
            console.log(error)
        }
    }
    
    // You would create a similar handleSignup function
    // const handleSignup = async (e) => { ... }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
            {/* Add signup form here */}
            <form onSubmit={handleSignup}>
                <h2>Login</h2>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;