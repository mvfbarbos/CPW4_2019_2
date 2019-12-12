import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
import incluir from '../../img/incluir.png';
import './Lista.scss';


export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: this.props.location.state.lista,
            itensFiltrados: [],
            itemSelecionado: {}
        };

        this.service = new ListaService();
    }


    filtrarItens = (event) => {
        
        let filtro = event.target.value;
        let itensFiltrados =
            this.service.recuperarItens(filtro);
        this.setState({ itensFiltrados });
    }

    

 
    incluirItem = (item, key) => {
        let quantidade = document.getElementById(`quantidade${key}`).value;
        item.quantidade = parseFloat(quantidade);
        let { lista } = this.state;

   
        lista.itens = lista.itens ? lista.itens : [];
      
        const descricao = item.descricao;
        const resposta = lista.itens.find(
            item => descricao === item.descricao
        );
        if (!resposta) {
            lista.itens.push(item);
        }
        this.setState({ lista });
    }

    render() {

        let {
            lista,
            itensFiltrados
        } = this.state;
        console.log(lista);

        const listaItensFiltrados = itensFiltrados.map((item, key) => (
            <div key={key} className="itemFiltrado">
                <div id="parteUm">
                  <span>{item.descricao}</span>  
                </div>
                
                <input
                    value={this.defaultValue}
                    ref={this.input}
                    name={`quantidade${key}`}
                    min="0.001"
                    id={`quantidade${key}`} />
                
                <button onClick={() => this.incluirItem(item, key)}>
                    <img src={incluir} alt="Incluir" />
                </button>
                <span>{item.unidade}</span>
            </div>
        ));

        const listaItens = lista.itens ? lista.itens.map((item, key) => (

            <li key={key}>
                   <input type="checkbox"></input>
                {`${item.quantidade} ${item.unidade} de ${item.descricao}`}


            </li>
        )) : [];

        return (
            <div>
                <Menu
                    logo={paginaAnterior}
                    paginaAnterior="/"
                    titulo="Minha lista" />

                <div className="conteiner">
                    <h3 id="nomeLista"><b>{lista.nome}</b></h3>

                    <form>
                        <input
                            placeholder="Digite o item"
                            onChange={this.filtrarItens}
                            name="filtro"
                            type="text" />
                    </form>

                    <div className="listagem">
                        {listaItensFiltrados}
                    </div>
                    <div className="itens-compra">
                        <br/> 
                        <ul>
                            <li>{listaItens}</li>
                        
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}