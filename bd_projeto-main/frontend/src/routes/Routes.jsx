import React from 'react';

import { Switch, Route } from "react-router-dom";
import Content from '../layout/Content';
import Login from '../components/login/Login';
import Notfound from '../components/NotFound';
import Cadastro from '../components/cadastro-filmes/Cadastro';
import Sobre from '../components/Sobre';
import Catalogo from '../components/catalago/Catalago';


const Routes = props => (
    <Switch>
        <Route exact path="/">
            <Content className='tela-login'>
                <Login/>
            </Content>
        </Route>

        <Route path="/cadastro">
            <Content className='tela-cadastro'>
                <Cadastro/>
            </Content>
        </Route>

        <Route path="/sobre" component={Sobre}>
            <Content className='tela-sobre'>
                <Sobre/>
            </Content>
        </Route>

        <Route path="/catalogo" component={Catalogo}>
            <Content className='tela-catalogo'>
                <Catalogo/>
            </Content>
        </Route>

        <Route path="*" component={Notfound}>
            <Content className='tela-404'>
                <Notfound/>
            </Content>
        </Route>

    </Switch>
);
export default Routes;