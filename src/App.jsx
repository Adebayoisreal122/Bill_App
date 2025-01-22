import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
  <Route path="/" element={<Signin/>} />
</Routes>
    </>
  )
}

export default App
