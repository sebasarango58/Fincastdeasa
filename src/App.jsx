import { useState } from 'react'
import './App.css'
import Autentication from './views/Autentication/autentication'
import Register from './views/Autentication/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Autentication/>
      <Register/>
    </div>
  )
}

export default App