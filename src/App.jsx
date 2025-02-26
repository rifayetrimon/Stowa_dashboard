import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
