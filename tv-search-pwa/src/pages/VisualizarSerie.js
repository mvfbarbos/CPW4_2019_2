import React, { Component } from 'react';

import logo from "../img/paginaAnterior.png";

import Header from "../components/Header";

export default class VisualizarSerie extends Component {

    render() {
        const { serie, imagem } = this.props.location.state;
        const dados = serie.show;



        let generos = dados.genres[0];
        const quantidadeGeneros= dados.genres.length;
        if(quantidadeGeneros.length >1) {
            for(let i=1;i<quantidadeGeneros;i++) {
                generos += `,dados,genres[i]`;
            }
        }

        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Visualizar Série" />

                <div id="areaCartaz">
                    <img src={imagem} alt="Cartaz" />
                </div>
                <div id="areaDados" >
                    <h2>{dados.nome}</h2>
                    
                    <span id="generos">{generos}</span>
                </div>


            </div>
        )
    }
}
