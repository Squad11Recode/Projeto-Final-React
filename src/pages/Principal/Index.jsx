import React from "react";
import computer from "./imagens/computer.png"
import home from "./imagens/home.svg"
import school from "./imagens/school.png"
import student from "./imagens/student.png"



export default function Principal() {
    return (
        <div className="container-fluid">
             <nav className="navbar navbar-expand-lg navbar-light shadow" style="background-color: #ffffff">
        <div className="container">
            <a className="navbar-brand" href="index.html">E-DOAÇÃO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style="color: #333; font-weight: 400;">
                    <li className="nav-item" style="margin-left: 1rem">
                        <a className="nav-link" style="color: #699dee" href="index.html">Home</a>
                    </li>
                    <li className="nav-item" style="margin-left: 1rem">
                        <a className="nav-link" href="pages/about.html">Sobre Nós</a>
                    </li>
                    <li className="nav-item" style="margin-left: 1rem">
                        <a className="nav-link" href="pages/team.html">Equipe</a>
                    </li>
                </ul>
                <div>
                    <a className="btn btn-primary mx-2 rounded-pill" style="width: 100px; background-color: #699dee" href="pages/login.html">Login</a>
                    <a className="btn btn-primary rounded-pill" style="width: 100px; background-color: #699dee" href="pages/cadastro.html">Cadastro</a>
                </div>
            </div>
        </div>
    </nav>
    <div className="container rcd-home">
        <div id="rcd-home-desktop" className="d-flex align-content-center">
            <div className="d-flex align-items-start flex-column">
                <h1 style="font-size: 2.5rem">Democratizando a tecnologia e o acesso ao ensino superior!</h1>
                <p className="mt-3 mb-4">Uma organização sem fins lucrativos lutando para democratizar o acesso a tecnologia e ao ensino superior. Saiba mais sobre nosso projeto clicando abaixo.</p>
                <a className="btn btn-primary rounded-pill" style="width: 120px; background-color: #699dee" href="pages/about.html">Saber mais</a>
            </div>
            <img src= {home} alt="arte com computador e pessoas com acesso a internet"/>
        </div>
        <div id="rcd-home-mobile">
            <img src= {home} alt="arte com computador e pessoas com acesso a internet"/>
            <div>
                <h1 style="font-size: 2.5rem">Democratizando a tecnologia e o acesso ao ensino superior!</h1>
                <p className="mt-3 mb-4">Uma organização sem fins lucrativos lutando para democratizar o acesso a tecnologia e ao ensino superior. Saiba mais sobre nosso projeto clicando abaixo.</p>
                <a className="btn btn-primary rounded-pill" style="width: 120px; background-color: #699dee" href="pages/about.html">Saber mais</a>
            </div>
        </div>
    </div>
    <div className="rcd-estatisticas">
        <div className="container">
            <h2>Nossas Estatísticas</h2>
            <ul className="d-flex justify-content-center flex-wrap rcd-estatisticas-lista">
                <li className="rcd-estatisticas-item">
                    <img src= {school} alt="instituições de ensino"/>
                    <p className="rcd-estatisticas-numero">+10</p>
                    <p className="rcd-estatisticas-texto">instituições de ensino{"\n"}participantes</p>
                </li>
                <li className="rcd-estatisticas-item">
                    <img src = {computer} alt="Imagem de notebook"/>
                    <p className="rcd-estatisticas-numero">+100</p>
                    <p className="rcd-estatisticas-texto">equipamentos{"\n"}compartilhados</p>
                </li>
                <li className="rcd-estatisticas-item">
                    <img src= {student} alt=""/>
                    <p className="rcd-estatisticas-numero">+200</p>
                    <p className="rcd-estatisticas-texto">jovens estudantes {"\n"} impactados</p>
                </li>
            </ul>
        </div>
    </div>
  </div>  

)
}         