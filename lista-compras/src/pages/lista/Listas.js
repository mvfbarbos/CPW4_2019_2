import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
import adicionar from '../../img/adicionar.png';
import rotas from '../../constants/rotas';
export default class Listas extends Component {

    constructor() {
    
        super();

        this.state = {
            listas: []
        }

        this.service = new ListaService();
    }

    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(lista => (
                <div className="item">
                    <Link
                        to={
                            {
                                pathname: rotas.LISTA,
                                state: { lista }
                            }
                        }
                        key={lista._id}>
                        <div className="item">{lista.nome}</div>


                    </Link>
                   
                </div>
            ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Lista de Compras" />

                <div className="conteiner">
                    <div>

                        {
                        
                            !this.state.listas &&
                            <h2>Minhas listas</h2>
                        }

                        {
                            this.state.listas &&
                            <p id="mensagemNenhumaLista">
                                Clique no botão abaixo
                                para cadastrar uma nova
                                lista!
                            </p>
                        }

                        <div className="listagem">
                            {listas}



                        </div>

                        <div id="areaBotao">
                            <Link to="/criarlista">
                                <div id="botaoNovaLista">
                                    <img src={adicionar} alt="Nova lista" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
