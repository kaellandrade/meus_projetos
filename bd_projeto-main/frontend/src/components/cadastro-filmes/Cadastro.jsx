import React from 'react';
import { useEffect, useState } from 'react';
import Container from '../../layout/Container';
import Grid from '../../layout/Grid';
import Row from '../../layout/Row';
import Form from './FormCadastro';
import TabelaFilmes from './TabelaFilmes';

const URL_FILMES = "https://54.237.108.108:3000/filmes";

const Cadastro = _ => {
    const [movies, setMovies] = useState({});

    useEffect(_ => {
        getMovies();
    },[]);

    /**
     * Faz um get de todos o filmes. Também pode ser usada para atualizar
     * o estado do componente.
     */
    const getMovies = async _ => {
        try {
            const response = await (fetch(URL_FILMES));
            const dataJson = await response.json();
            setMovies({ ...dataJson });
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <div className='banner sticky-top'>
                <h1 className='title-banner'>Cadastrar filmes</h1>
            </div>
            <Container container='container pb-5'>
                <Row>
                    <Grid cols='12 12 12' className='mt-5'>
                        <Form  getMovies = {getMovies} />
                    </Grid>
                    <hr />
                    <Grid cols='12 12 12' className='mt-5 mb-5'>
                        <TabelaFilmes getMovies = {getMovies} todosFilmes={movies} />
                    </Grid>
                </Row>
            </Container>
        </div>
    )

}

export default Cadastro;