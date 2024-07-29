import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-out' element={<SignOut />} />
          <Route path='/Profile' element={<Profile />} />


        </Routes>
      </BrowserRouter>

      <h1 className='text-red-600'>App</h1>
    </>
  )
}

export default App
