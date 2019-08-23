import React, { Component } from 'react'

import Menu from '../menu/Menu';
import logo from "../../img/logo.png";
import ListaService from "../../services/ListaService";

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

    componentDidMount() {
        const listas = this.service.recuperarListas();
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(
                lista => (
                    <li key={lista._id}>{lista.nome}</li>
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


                        <ul>
                            {listas}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
