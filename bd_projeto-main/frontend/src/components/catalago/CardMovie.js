import React from 'react';
import Grid from '../../layout/Grid';
import MovieCard from '../../assets/movieCard.png'
import BtnIcon from '../BtnIcon';

/**
 * Componente Card para os filmes
 */
const CardMovie = props => {
    return (
        <Grid cols='12 12 6 3'>
            <div className="card mt-5 text-center mb-4">
                <img className="card-img-top" src={props.caminhodoarquivo || MovieCard} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.children}</p>
                    <BtnIcon color="danger" icon="far fa-play-circle">Play</BtnIcon>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Lançado em {props.lancamento}</small>
                </div>
            </div>
        </Grid>

    )
}

export default CardMovie;