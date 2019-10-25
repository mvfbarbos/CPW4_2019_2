import React from "react";
import {
    BrowserRouter,
        Switch,
    Route
} from "react-router-dom";

import Pesquisar from "./pages/Pesquisar";
import VisualizarSerie from "./pages/VisualizarSerie";

const Rotas = () => (
    <BrowserRouter>
    <Switch>
    <Route 
    exact path="/"
     component={Pesquisar}>         
     </Route>
     
    <Route
     exact path="/serie"
      component={VisualizarSerie}>          
      </Route>

    </Switch>
    
    </BrowserRouter>
);

export default Rotas;