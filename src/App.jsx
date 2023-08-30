import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Fighters from '../src/components/Fighters'
import '../server'
import Layout from '../src/components/Layout'
import './App.css'
import Home from './pages/Home'
function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}></Route>

        </Routes>
        <Home />

        </BrowserRouter>

    </>
  )
}

export default App
