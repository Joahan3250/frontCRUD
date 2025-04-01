import "./Formulario.css"
import { useState } from "react"

export function Formulario({ setUser }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name == "" || password == "") {
            setError(true)
            return
        }
        setError(false)
        setUser([name])
    }

    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
                onSubmit={handleSubmit}
            >
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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