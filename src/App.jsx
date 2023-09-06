import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../src/components/Layout'
import './App.css'
import '../server'
import Home from './pages/Home'
import Pfp from './pages/Pfp'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='pfp' element={<Pfp />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
