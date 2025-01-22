import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
  <Route path="/" element={<Signin/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/dasboard" element={<Dashboard/>} />
</Routes>
    </>
  )
}

export default App
