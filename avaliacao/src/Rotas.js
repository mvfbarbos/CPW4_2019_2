import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import Home from './pages/Home';
import Bio from './pages/Bio';
import Contato from './pages/Contato';
import ROTAS from "./constants/rotas";


const Rotas = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path= {ROTAS.HOME} component={Home} />
          <Route exact path={ROTAS.BIO} component={Bio} />
          <Route exact path={ROTAS.CONTATO} component={Contato} />
        </Switch>
      </BrowserRouter>

);


export default Rotas;
