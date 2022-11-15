import React from "react";

export default function Cadastro() {
    return (
      
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

    )
}       