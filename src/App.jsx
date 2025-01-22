import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'

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
