import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../src/components/Layout'
import './App.css'
import '../server'
import Home from './pages/Home'
import Pfp from './pages/Pfp'
import Wsw from './pages/Wsw'
import Wfw from './pages/Wfw'
import Wbw from './pages/Wbw'
import Flyweight from './pages/Flyweight'
import Bantamweight from './pages/Bantamweight'
import Featherweight from './pages/Featherweight'
import Lightweight from './pages/Lightweight'
import Welterweight from './pages/Welterweight'
import Middleweight from './pages/Middleweight'
import LightHeavyweight from './pages/LightHeavyweight'
import Heavyweight from './pages/Heavyweight'
import UfcRankings from './pages/UfcRankings'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='pound_for_pound' element={<Pfp />}/>
          <Route path ='womens_strawweight' element={<Wsw />}/>
          <Route path ='womens_flyweight' element={<Wfw />}/>
          <Route path ='womens_bantamweight' element={<Wbw />}/>
          <Route path ='flyweight' element={<Flyweight />}/>
          <Route path ='bantamweight' element={<Bantamweight />}/>
          <Route path ='featherweight' element={<Featherweight />}/>
          <Route path ='lightweight' element={<Lightweight />}/>
          <Route path ='welterweight' element={<Welterweight />}/>
          <Route path ='middleweight' element={<Middleweight />}/>
          <Route path ='light_heavyweight' element={<LightHeavyweight />}/>
          <Route path ='heavyweight' element={<Heavyweight />}/>
          <Route path ='Rankings' element={<UfcRankings />}/>








          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
