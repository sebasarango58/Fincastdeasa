import React, { useState } from 'react';
import { auth } from '../../utils/db';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('Usuario registrado:', userCredential.user);
        }).catch(error => console.log('Error:', error.message));
    };
    return (
        <div className="container mt-5" style={{ maxWidth: "1000px" }}>
            <div className="text-center mb-4">
                <h2>Register</h2>
                <p>Please enter your email and password to register.</p>
            </div>
            <form>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignUp}>Register</button>
            </form>
        </div>
 );
}


export default Register;