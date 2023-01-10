import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from './Views/Home';
function App() {

  return (
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  )
}




export default App
