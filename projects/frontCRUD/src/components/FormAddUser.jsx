import { useState } from 'react'
import { Link } from 'react-router-dom'

export function FormAddUser() {
    const [rol, setRol] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState(false)
    const [successful, setSuccessful] = useState(false);
    const API_DB = "https://veterinarysystem-r6yx.onrender.com/api-users-v1"

    const roles = [
        { value: 0, label: 'Seleccione un rol...'},
        { value: 'Admin', label: 'Admin' },
        { value: 'Encargado', label: 'Encargado' },
        { value: 'Recepcionista', label: 'Recepcionista' },
        { value: 'Veterinario', label: 'Veterinario' }
    ]

    // Boton Agregar
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (firstName == "" || lastName == "" || rol == "" || username == "" || password == "") {
            setError(true)
            return
        }

        console.log(firstName);
        console.log(lastName);
        console.log(rol);
        console.log(username);
        console.log(password);

        await fetch(`${API_DB}/upload`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                position: rol,
                username: username,
                password: password,
                status: 1
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => Error("Error: ", error))

        setError(false)
        setSuccessful(true)
    }

    // Cambio Select
    const handleChange = (e) => {
        e.preventDefault();

        setRol(e.target.value)
    }

    return (
        <div>
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
                            rol.value == 0
                                ? <option key={rol.value} value={rol.value} disabled>{rol.label}</option>
                                : <option key={rol.value} value={rol.value}>{rol.label}</option>
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

                    <button>Agregar</button>
                </form>
                {error && <p>Todos los campos deben de estar llenos</p>}
                {successful && <p>Usuario registrado con éxito</p>}
                <Link to="home-admin">Regresar</Link>
        </div>
    )
}