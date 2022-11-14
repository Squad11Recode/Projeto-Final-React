import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {

  //Listagem
  const [doador, setDoador] = useState([]);

  const listarDoador = async () => {
    try {
      await axios.get("http://localhost:8080/api/doador")
        .then((response) => {
          setDoador(response.data)
        })
    } catch (erro) {
      alert(erro.mensage);
    }
  };

  useEffect(() => {
    listarDoador();
  }, [])

  //Deletar
  const { id } = useParams();

  const deleteDoador = async(id) => {
    try {
      await axios.delete(`http://localhost:8080/api/doador/${id}`)
        .then((response) => {
          alert("Doador excluido!")
          listarDoador();
        })
    } catch (erro) {
      alert(erro.message)
    }
  }

  return (
    <div className="container">
      <div clasName="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col"> - </th>
            </tr>
          </thead>
          <tbody>
            {doador.map((doador, key) => (
              <tr>
                <th scope="row" key={key}>{key + 1}</th>
                <td>{doador.Nome}</td>
                <td>{doador.Email}</td>
                <td>
                  <Link to={`/view/${doador.id}`} className="btn btn-outline-success mx-2">
                    Ver
                  </Link>
                  <Link to={`/edite/${doador.id}`} className="btn btn-success mx-2">
                    Editar
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteDoador(doador.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
