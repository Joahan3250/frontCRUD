import { Formulario } from './components/Formulario'
import { Home } from './components/Home'
import { useState, useEffect } from 'react'
import './App.css'

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
      {
        !user.length > 0
          ? < Formulario setUser={setUser} setRol={setRol} />
          : <Home user={user} rol={rol} />
      }
    </div>
  )
}

export default App
