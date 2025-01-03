import React from 'react';
import './register.css'; // Create this CSS file for styling

const Register = () => {
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="**********" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
