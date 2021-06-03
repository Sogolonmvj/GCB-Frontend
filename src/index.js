import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppSecondPage from './AppSecondPage';
import AppThirdPage from './AppThirdPage';
import AppFourthPage from './AppFourthPage';
import AppFifthPage from './AppFifthPage';
import Register from './register';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <AppSecondPage />
        <AppThirdPage />
        <AppFourthPage />
        <AppFifthPage />
        <Register />
    </React.StrictMode>, 
    document.getElementById('root')
);

