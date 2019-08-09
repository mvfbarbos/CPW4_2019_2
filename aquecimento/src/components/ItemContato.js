import React, { Component } from 'react'

import "./ItemContato.css";

export default class ItemContato extends Component {
    render() {
        return (
            
            /* cria o props */
            <div className="itemContato">
                <img src={this.props.icone} alt="Contato"/>
                <span id="descricao">{this.props.descricao}</span>
                :
                <span id="contato">{this.props.contato}</span>
            </div>
        )
    }
}
