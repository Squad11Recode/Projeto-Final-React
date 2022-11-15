import React from "react";
import about from "./imagens/about.svg";

export default function About() {
    return (

        <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light shadow" style="background-color: #ffffff">
            <div className="container">
                <a className="navbar-brand" href="../index.html">E-DOAÇÃO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style="color: #333; font-weight: 400;">
                        <li className="nav-item" style="margin-left: 1rem">
                            <a className="nav-link" href="../index.html">Home</a>
                        </li>
                        <li className="nav-item" style="margin-left: 1rem">
                            <a className="nav-link" style="color: #699dee" href="about.html">Sobre Nós</a>
                        </li>
                        <li className="nav-item" style="margin-left: 1rem">
                            <a className="nav-link" href="team.html">Equipe</a>
                        </li>
                    </ul>
                    <div>
                        <a className="btn btn-primary mx-2 rounded-pill" style="width: 100px; background-color: #699dee" href="login.html">Login</a>
                        <a className="btn btn-primary rounded-pill" style="width: 100px; background-color: #699dee" href="cadastro.html">Cadastro</a>
                    </div>
                </div>
            </div>
        </div><div className="container rcd-about">
                <h1 style="text-align: center; font-size: 2.5rem; margin-top: 3rem">Sobre Nós</h1>
                <div id="rcd-about">
                    <img className = "card-img-top" src={about} alt="Imagem da capa do card" />
                    <div className="d-flex align-content-center">
                        <div className="d-flex align-items-start flex-column">
                            <h2 style="font-size: 2rem">Quem somos?</h2>
                            <p className="mt-3 mb-4">Nós somos a E-Doação, uma instituição sem fins lucrativos cujo principal objetivo é causar um impacto social positivo na sociedade em que vivemos ao facilitar o acesso de jovens estudantes ao mundo digital e a tecnologia por meio da doação de equipamentos.</p>
                            <h2 style="font-size: 2rem">Quem é impactado diretamente pelo projeto?</h2>
                            <p className="mt-3 mb-4">Nosso público alvo são jovens estudantes do ensino de escolas públicas brasileira, uma vez que este público se encontra em fase decisiva da vida estudantil e profissional com a chegada iminente do ensino médio. Logo, buscamos não só facilitar o acesso a equipamentos e internet, mas também buscamos facilitar o acesso ao ensino superior e ao mercado de trabalho.</p>
                            <h2 style="font-size: 2rem">Como posso ajudar com o projeto?</h2>
                            <p className="mt-3 mb-4">Você pode ajudar nosso projeto de diversas formas: doando equipamentos eletrônicos que estejam funcionando ou que precisem de reparos (aceitamos computadores, tablets e smartphones). Caso entenda sobre equipamentos eletrônicas, pode ser um voluntário na nossa equipe de conserto e manutenção. Se for gestor ou funcionários de uma instituição de ensino pode entrar em contato conosco para saber como a sua instituição pode participar do programa.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}