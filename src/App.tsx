import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components/templets1/pages/Index.tsx'
import About from './components/templets1/pages/About.tsx'
import Login from './pages/auth/Login.tsx'
import Register from './pages/auth/Register.tsx'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />

              {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
