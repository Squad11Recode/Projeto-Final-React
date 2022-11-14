import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

export default function ViewDoador() {

  const {id} = useParams();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    carregaDoador();
  }, [])

  const carregaDoador = async () => {
    const result = await axios.get(`http://localhost:8080/api/doador/${id}`)
    setNome(result.data.Nome)
    setEmail(result.data.email)
  }

  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Atualizar Doador</h2>
            <div className="card">
              <div className="card text-center">
                <div clasName="card-header">
                  ID:{id}
                </div>
                <div clasName="card-body">
                  <p className="card title"> <b>Nome:</b>{nome}</p>
                  <p className="card title"> <b>E-mail:</b>{email}</p>
                  <button type="button" className="btn btn-outline-sucess">Voltar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

