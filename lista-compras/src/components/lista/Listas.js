import React, { Component } from 'react'

import Menu from '../menu/Menu';
import logo from "../../img/logo.png";
import ListaService from "../../services/ListaService";

import './Lista.scss';

import adicionar from "../../img/adicionar.png";


export default class Listas extends Component {

    constructor() {
        /**
         * Toda vez que criar um construtor
         * em um comonetne React,lembre-se
         * de invocar o construtor da classe 
         * mãe Component na primeira linha de codigo.
         */

        super();

        this.state = {
            listas: []
        }

        this.service = new ListaService();
    }

    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        console.log(listas);
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(
                lista => (
                    <div className="item" key={lista._id}>{lista.nome}</div>
                ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Lista de Compras" />
                <div className="conteiner">

                    <div>
                        <h2>Minhas Listas</h2>
                        <div id="listagem">
                            {listas}
                        </div>

                        <div id="areaBotao">
                            <img src={adicionar}alt="Nova Lista" id="botaoNovaLista"/>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
