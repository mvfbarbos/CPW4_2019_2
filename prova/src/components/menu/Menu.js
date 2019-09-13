import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div id="menu">

          <span>Marcus Fidel</span>
             <ul>
                 <li>
                     <Link to={this.props.inicio} to="/"> Início</Link>
                 </li>
                 <li>
                     <Link to={this.props.bio}to="/bio">Bio</Link>
                 </li>
                 <li>
                     <Link to={this.props.contato} to ="/contato">Contato</Link>
                 </li>
             </ul>
      </div>
    );
  }
}
export default Menu;