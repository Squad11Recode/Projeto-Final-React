import React from "react";

export default function Cadastro() {
    return (
        <div className = "container-fluid">
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
                            <a className="nav-link" href="about.html">Sobre Nós</a>
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
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form id="rcd-login">
                        <div className="mb-3">
                            <label for="exampleInputName1" className="form-label">Nome Completo</label>
                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Digite seu nome" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Endereço de e-mail</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail"/>
                                <div id="emailHelp" className="form-text">Nunca vamos compartilhar seu email, com ninguém</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Telefone</label>
                            <input type="number" className="form-control" id="exampleInputNumber1" placeholder="Digite seu telefone"/>

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Mantenha-me conectado</label>
                        </div>
                        <button type="submit" className="btn btn-primary"> Enviar </button>
                    </form>
                </div>
            </div>
        </div>    
    </div>    



    )
}       