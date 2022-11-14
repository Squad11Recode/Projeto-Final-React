import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDoador() {

  const navigate = navigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvar = async (e) => {
    e.preventDefault();
    console.log(nome, email);
    await axios.post("http://localhost:8080/api/doador", {
      Nome: nome,
      Email: email
    }).then((result) => {
      alert("Doador cadastrado")
      Navigate("/home")
    }).catch((erro) => {
      console.log(erro);
    })
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Cadastro de Doadores</h2>
          <form>
            <div class="container">
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com
                  ninguém.</small>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
