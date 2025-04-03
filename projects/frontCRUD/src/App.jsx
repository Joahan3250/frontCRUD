import { Formulario } from './components/Formulario'
import { Home } from './components/Home'
import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { HomeRecepcionista } from './components/HomeRecepcionista'
import { HomeEncargado } from './components/HomeEncargado'
import { HomeVeterinario } from './components/HomeVeterinario'

function App() {
  const [rol, setRol] = useState("")
  const [user, setUser] = useState("");
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://veterinarysystem-r6yx.onrender.com/api-users-v1/usersList")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [])

  // console.log(rol);

  return (

    <div className='App'>
      {/* {data?.map((user) => (<li key={user.id}>{user.username} {user.password}</li>))} */}
      {/* <Routes>
          <Route path='/' element={ < Formulario setUser={setUser} setRol={setRol}/> }/>
          <Route path="home-admin" element={ < Home user={user} setUser={setUser} /> } />
          <Route path="home-encargado" element={ < HomeEncargado user={user} setUser={setUser} /> } />
          <Route path="recepcionista" element={ < HomeRecepcionista user={user} setUser={setUser} /> } />
          <Route path="home-veterinario" element={ < HomeVeterinario user={user} setUser={setUser} /> } />
      </Routes> */}

      {

        !user.length > 0
          ? < Formulario setUser={setUser} setRol={setRol} />
          : <Home user={user} rol={rol} />


        // ? < Home user={user} setUser={setUser} />


        // : rol == "Encargado"
        //   ? < HomeEncargado user={user} setUser={setUser} />
        //   : rol == "Recepcionista"
        //     ? < HomeRecepcionista user={user} setUser={setUser} />
        //     : < HomeVeterinario user={user} setUser={setUser} />
      }


    </div>
  )
}

export default App
