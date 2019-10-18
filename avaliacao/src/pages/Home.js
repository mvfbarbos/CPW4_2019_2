import React, { Component } from 'react'

import Menu from '../components/menu/Menu';

export default class Home extends Component {

  
    render() {
        return (
            <div>
                <p>Fidel Marcus</p>
                <Menu
                    titulo="Home"
                    Home= "/"
                    />
                    
            </div>
        )
    }
}
