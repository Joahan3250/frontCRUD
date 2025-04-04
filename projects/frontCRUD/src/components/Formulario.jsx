import "./Formulario.css"
import { useState } from 'react';

export function Formulario({ setUser, setRol }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const API_DB = "https://veterinarysystem-r6yx.onrender.com/api-users-v1"
    let userExists;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name == "" || password == "") {
            setError("empty")
            return
        }

        await fetch(`${API_DB}/user?user=${name}&password=${password}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                userExists = data;
            })
            .catch(error => Error("Error: ", error))

        if (!userExists) {
            setError("notFound")
            return
        }

        setError("");
        setUser([userExists.username]);
        setRol([userExists.position]);
    };

    return (
        <section>
            <h1>Login</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <p>Usuario</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Iniciar sesion</button>
            </form>
            {
                error == "empty"
                    ? <p>Todos los campos son obligatorios</p>
                    : error == "notFound"
                        ? <p>Credenciales incorrectas. Ingresar de nuevo</p>
                        : error
            }
        </section>
    );
}
