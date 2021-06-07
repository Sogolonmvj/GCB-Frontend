import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import AppSecondPage from './AppSecondPage';
import AppThirdPage from './AppThirdPage';
import AppFourthPage from './AppFourthPage';
import AppFifthPage from './AppFifthPage';
import Register from './register';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/signup"><Register /></Route>
                <Route path="/"><App /><AppSecondPage /><AppThirdPage /><AppFourthPage /><AppFifthPage /></Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
);

