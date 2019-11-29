import React from 'react';
import HttpsApp from 'react-https-redirect';

import './App.scss';
import Rotas from '../rotas';

const App = () => (
    <HttpsApp>
        <Rotas />
    </HttpsApp>
);

export default App;