import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:3000/login", { email, password });
            localStorage.setItem("username", res.data.username);
            setIsLoggedIn(true);
            navigate("/home");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
            <div style={{ 
                width: '300px', 
                padding: '20px', 
                border: '1px solid #ccc', 
                borderRadius: '10px', 
                textAlign: 'center', 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                backgroundColor: 'white' 
            }}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button 
                    onClick={handleLogin} 
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Login
                </button>
                <p style={{ marginTop: '10px' }}>
                    New user? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
