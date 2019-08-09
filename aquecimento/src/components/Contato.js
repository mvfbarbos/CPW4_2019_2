import React, { Component } from 'react'


import ItemContato from './ItemContato';
import email from "../img/email.png";
import endereco from "../img/endereco.png";
import fone from "../img/fone.png";


export default class Contato extends Component {
    render() {
        return (
            <div>
{/* chama  o props */}
                <h3>Contato</h3>
                <ItemContato icone={endereco}
                    descricao="Endereço"
                    contato="Rua 8 de novembro, 22" />

                <ItemContato icone={email}
                    descricao="Email"
                    contato="fuialievoltei@jafiquei.com" />

                <ItemContato icone={fone}
                    descricao="Telefone"
                    contato="(67)99999-9999" />
            </div>
        )
    }
}
