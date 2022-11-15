import React from "react";
import about from "../../Imagens/about.svg";

export default function About() {
    return (

        <div className="container-fluid">
            <div className="container rcd-about">
                <h1>Sobre Nós</h1>
                <div id="rcd-about">
                    <img className = "card-img-top" src={about} alt="Imagem da capa do card" />
                    <div className="d-flex align-content-center">
                        <div className="d-flex align-items-start flex-column">
                            <h2 >Quem somos?</h2>
                            <p className="mt-3 mb-4">Nós somos a E-Doação, uma instituição sem fins lucrativos cujo principal objetivo é causar um impacto social positivo na sociedade em que vivemos ao facilitar o acesso de jovens estudantes ao mundo digital e a tecnologia por meio da doação de equipamentos.</p>
                            <h2 >Quem é impactado diretamente pelo projeto?</h2>
                            <p className="mt-3 mb-4">Nosso público alvo são jovens estudantes do ensino de escolas públicas brasileira, uma vez que este público se encontra em fase decisiva da vida estudantil e profissional com a chegada iminente do ensino médio. Logo, buscamos não só facilitar o acesso a equipamentos e internet, mas também buscamos facilitar o acesso ao ensino superior e ao mercado de trabalho.</p>
                            <h2 >Como posso ajudar com o projeto?</h2>
                            <p className="mt-3 mb-4">Você pode ajudar nosso projeto de diversas formas: doando equipamentos eletrônicos que estejam funcionando ou que precisem de reparos (aceitamos computadores, tablets e smartphones). Caso entenda sobre equipamentos eletrônicas, pode ser um voluntário na nossa equipe de conserto e manutenção. Se for gestor ou funcionários de uma instituição de ensino pode entrar em contato conosco para saber como a sua instituição pode participar do programa.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}