import React from 'react';
import Container from '../layout/Container';
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
/**
 * Componente cabeçalho
 */
const Header = _ => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container container='container'>
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/cadastro'>Manutenção</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/sobre'>Sobre</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>

    </header>
);

export default Header;