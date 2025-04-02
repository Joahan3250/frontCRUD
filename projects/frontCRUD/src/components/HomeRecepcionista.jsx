export function HomeRecepcionista({ user, setUser }) {
    const handleLogout = () => {
        setUser([])
    }

    return (
        <div>
            <h1>Bienvenido Recepcionista</h1>
            <h2>{user}</h2>
            <button onClick={handleLogout}>Salir</button>
        </div>
    )
}