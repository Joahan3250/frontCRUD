import { Formulario } from './components/Formulario'
import { Home } from './components/Home'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://veterinarysystem-r6yx.onrender.com/api-users-v1/usersList")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  return (

    <div className='App'>
      {data?.map((user) => (<li key={user.id}>{user.username} {user.password}</li>))}
      {
        !user.length > 0
          ? < Formulario setUser={setUser} />
          : <Home user={user} setUser={setUser} />
      }
    </div>
  )
}

export default App
