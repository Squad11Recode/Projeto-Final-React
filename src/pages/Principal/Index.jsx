import React from "react";
import computer from "../../Imagens/computer.png"
import home from "../../Imagens/home.svg"
import school from "../../Imagens/school.png"
import student from "../../Imagens/student.png"
import {Link}  from "react-router-dom";



export default function Principal() {
    return (
    <main>
    <div className="container-fluid">
    <div className="container rcd-home">
            <div id="rcd-home-desktop" className="d-flex align-content-center">
                <div className="d-flex align-items-start flex-column">
                    <h1 >Democratizando a tecnologia e o acesso ao ensino superior!</h1>
                    <p className="mt-3 mb-4">Uma organização sem fins lucrativos lutando para democratizar o acesso a tecnologia e ao ensino superior. Saiba mais sobre nosso projeto clicando abaixo.</p>
                    <Link className="btn btn-primary rounded-pill"  to="pages/about.html">Saber mais</Link>
                </div>
                <img src={home} alt="arte com computador e pessoas com acesso a internet" />
            </div>
            <div id="rcd-home-mobile">
                <img src={home} alt="arte com computador e pessoas com acesso a internet" />
                <div>
                    <h1>Democratizando a tecnologia e o acesso ao ensino superior!</h1>
                    <p className="mt-3 mb-4">Uma organização sem fins lucrativos lutando para democratizar o acesso a tecnologia e ao ensino superior. Saiba mais sobre nosso projeto clicando abaixo.</p>
                    <Link className="btn btn-primary rounded-pill"  to="pages/about.html">Saber mais</Link>
                </div>
            </div>
        </div><div className="rcd-estatisticas">
                <div className="container">
                    <h2>Nossas Estatísticas</h2>
                    <ul className="d-flex justify-content-center flex-wrap rcd-estatisticas-lista">
                        <li className="rcd-estatisticas-item">
                            <img src={school} alt="instituições de ensino" />
                            <p className="rcd-estatisticas-numero">+10</p>
                            <p className="rcd-estatisticas-texto">instituições de ensino{"\n"}participantes</p>
                        </li>
                        <li className="rcd-estatisticas-item">
                            <img src={computer} alt="Imagem de notebook" />
                            <p className="rcd-estatisticas-numero">+100</p>
                            <p className="rcd-estatisticas-texto">equipamentos{"\n"}compartilhados</p>
                        </li>
                        <li className="rcd-estatisticas-item">
                            <img src={student} alt="Desenho de estudante" />
                            <p className="rcd-estatisticas-numero">+200</p>
                            <p className="rcd-estatisticas-texto">jovens estudantes {"\n"} impactados</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>       
    </main>
)
}         