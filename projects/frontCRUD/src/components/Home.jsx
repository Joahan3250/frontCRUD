import { Link, Route, Routes } from "react-router-dom";
import { FormAddUser } from "./FormAddUser";

export function Home({ user, setUser, rol }) {
    const handleLogout = () => {
        setUser([]);
    };

    return (
        <div>
            <Routes>
                {/* <Route path="/" element={ < Formulario setUser={setUser} setRol={setRol}/> }/> */}
                <Route path="home-admin" element={<Home user={user} setUser={setUser} />} />
                {/* <Route path="home-encargado" element={ < HomeEncargado user={user} setUser={setUser} /> } />
                    <Route path="recepcionista" element={ < HomeRecepcionista user={user} setUser={setUser} /> } />
                    <Route path="home-veterinario" element={ < HomeVeterinario user={user} setUser={setUser} /> } /> */}
                <Route path="add-user" element={<FormAddUser />}></Route>
            </Routes>
            <h1>Bienvenido {rol}</h1>
            <h2>{user}</h2>
            <br></br>
            <button onClick={handleLogout}>Salir</button>

            {rol == 'Admin' ? <Link to="add-user">Agregar nuevo usuario</Link> : <p>No tienes permisos</p>}
        </div>
    );
}