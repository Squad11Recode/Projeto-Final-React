import React from "react";

export default function Login() {
    return (

        
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form id="rcd-login">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Usuário</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Digite seu login de usuário.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Mantenha-me conectado</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
      
    )
}