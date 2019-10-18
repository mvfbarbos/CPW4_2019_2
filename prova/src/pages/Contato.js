import React, { Component } from 'react'


import Menu from '../components/menu/Menu';
import "./contatos.scss";

import face from "../img/face.png";
import gmail from "../img/gmail.png";
import phone from "../img/phone.png";
import whats from "../img/whats.png";

export default class Contato extends Component {
    render() {
        return (

            <div>
                <Menu />

                <div id="conteudoContatos">
                    <div >
                  
                        <img id="img " src={phone} />
                        <p> Marcus (67)99999-9999 / Fidel (67)88888-8888</p>

                    </div>

                    <div >
                        <img id="img" src={whats} />
                        <p> Marcus(67)00000-0000 / Fidel (67)11111-1111</p>
                    </div>

                    <div >
                        <img id="img" titulo="face" src={face} />
                        <p> Marcus Vinicus. Fidel Lima</p>

                    </div>

                    <div >
                        <img id="img" titulo="email" src={gmail} />
                        <p> mvfbarbos@gmail.com / cr.belga@gmail.com</p>
                    </div>





                </div>
            </div>

        )
    }
}
