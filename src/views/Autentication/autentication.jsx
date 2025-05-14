import React from "react";  
import { auth } from "../../utils/db"; 
import { signInWithEmailAndPassword } from "firebase/auth";

const Autentication = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, username, password)
        .then(() => {
            // Usuario autenticado correctamente
            alert("Login exitoso");
        })
        .catch((error) => {
            // Error al autenticar (usuario no encontrado o contraseña incorrecta)
            alert("Usuario no encontrado o contraseña incorrecta");
            console.error("Error de autenticación:", error);
        });
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "1000px" }}>
            <div className="text-center mb-4">
                <h2>Welcome to the Authentication Page</h2>
                <p>Please enter your credentials to login.</p>
            </div>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    {/* <label htmlFor="username" className="form-label">Username</label> */}
                    <input type="text" className="form-control" id="username" placeholder="Username" required/>
                </div> 
                <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">Password</label> */}
                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
  );
}

export default Autentication