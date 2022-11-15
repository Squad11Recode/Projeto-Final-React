import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import AddDoador from './views/AddDoador';
import EditDoador from './views/EditDoador';
import ViewDoador from './views/ViewDoador';

import Principal from './pages/Principal';
import About from './pages/About';
import Equipe from './pages/Equipe';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Footer from './components/Footer';



export default function Rotas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddDoador />} />
        <Route path="/edit/:id" element={<EditDoador />} />
        <Route path="/view/:id" element={<ViewDoador/>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer/>

    </Router>
  )
}
