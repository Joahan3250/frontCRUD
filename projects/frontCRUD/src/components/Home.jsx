import { useState } from "react"

export function Home({ user, setUser }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [rol, setRol] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

        const roles = [
            { value: 'Admin', label: 'Admin' },
            { value: 'Encargado', label: 'Encargado' },
            { value: 'Recepcionista', label: 'Recepcionista' },
            { value: 'Veterinario', label: 'Veterinario' }
        ]

        // Boton Salir
        const handleLogout = () => {
            setUser([])
        }

        // Boton Agregar
        const handleSubmit = async (e) => {
            e.preventDefault()
        }

        // Cambio Select
        const handleChange = (e) => {
            e.preventDefault();

            setRol(e.target.value);
        }

        return (
            <div>
                <h1>Bienvenido Admin</h1>
                <h2>{user}</h2>
                <br></br>
                <button onClick={handleLogout}>Salir</button>

                <h2>Ingresar nuevo usuario</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>First Name:</p>
                    <input type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />

                    <p>Last Name:</p>
                    <input type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />

                    <p>Rol:</p>
                    <select id="select-roles" value={rol} onChange={handleChange}>
                        {roles.map((rol) => (
                            <option value={rol.value}>{rol.label}</option>
                        ))}
                    </select>

                    <p>Username:</p>
                    <input type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <p>Password:</p>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </form>
            </div>
        )
}