import React, { Component } from 'react'

import Menu from '../components/menu/Menu';
import "./bio.scss";


export default class Bio extends Component {
    render() {
        return (

            <div>
                <Menu />
               
                <div id="conteudoBio">
                    <div id="letra">
                        Dupla de programadores ,desenvolvedores de aplicações em JAVA,React.JS,React-Native.
                        
                    </div>
                </div>
            </div>
        )
    }
}
