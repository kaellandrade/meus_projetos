import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel'
import Container from '../../layout/Container';
import Row from '../../layout/Row';
import CardMovie from './CardMovie';
const URL_FILMES = "https://54.237.108.108:3000/filmes";
/**
 * Verifica se um determinado link de imagem é válido;
 */
const isIMG = (imagem) => {
    let RegexImg = /\bhttps?:\/\/.+(jpg|png|svg|png|jpeg|gif)\b/;
    const isImg = imagem.match(RegexImg);
    return isImg ? isImg[0] : false;

}

/**
 * Componente responsável por listar todos os filmes no banco
 */
const Catalogo = props => {
    const [catalogo, setFimes] = useState([]);
    /**
     * Recupera todos os filmes do bancode dados.
     */

    const getFilmes = async _ => {
        try {
            const response = await (fetch(URL_FILMES));
            const dataJson = await response.json();
            setFimes(dataJson);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(_ => {
        getFilmes();
    }, []);
    return (
        <Container>
            <Carousel />
            <h2 className='display-3 text-center text-white pt-5'>Olá, veja nossos filmes.</h2>
            <Row>
                {catalogo.map(({ titulo, titulo_idtitulo, sinopse, datalancamento, caminhodoarquivo }, _) => (
                    <CardMovie caminhodoarquivo={isIMG(caminhodoarquivo)} key={titulo_idtitulo} titulo={titulo} lancamento={datalancamento}>
                        {sinopse}
                    </CardMovie>
                ))}
            </Row>
        </Container>
    )
}

export default Catalogo;
