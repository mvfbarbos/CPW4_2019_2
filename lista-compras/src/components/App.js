import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Listas from './lista/Listas';
import Lista from './lista/Lista';
import "./App.scss";
import CriarLista from './lista/CriarLista';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Listas} />
          <Route exact path="/Lista" component={Lista} />
          <Route exact path="/criarLista" component={CriarLista} />
        </Switch>
      </BrowserRouter>
    )
  }
}
