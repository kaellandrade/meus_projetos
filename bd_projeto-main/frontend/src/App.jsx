import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilo.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes';
import Header from './views/Header';
import Footer from './views/Footer';

const App = _ => (
        <Router >
            <Header/>
            <Routes />
            <Footer/>
        </Router>
);

export default App;
