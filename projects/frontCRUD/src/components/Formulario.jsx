import "./Formulario.css"
import { useState } from "react"

export function Formulario({ setUser, setRol }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const API_DB = "https://veterinarysystem-r6yx.onrender.com/api-users-v1"
    let userExists;

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name == "" || password == "") {
            setError(true)
            return
        }

        await fetch(`${API_DB}/username?username=${name}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                userExists = data;
                console.log(userExists);
            })
            .catch(error => Error("Error: ", error))

        setError(false)
        setUser([userExists.username])
        setRol([userExists.position])
    }

    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
                onSubmit={handleSubmit}
            >
                <p>Usuario</p>
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <p>Password</p>
                <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}