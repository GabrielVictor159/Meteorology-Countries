import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Map from './Views/Map';

function App() {

  return (
     <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
  )
}
const Home = (props)=>{
return(
  <div>
    <h1>{props.name}</h1>
  </div>
);
}
export default App
