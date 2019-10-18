import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import "./Menu.scss"; //importar o scss do menu


export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
            <Link to ={this.props}>
             
            </Link>
                <span>{this.props.titulo}</span>             
            </div>
        )
    }
}
