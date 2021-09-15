import React from 'react';
import BtnIcon from '../BtnIcon';
import EditTitulo from './EditTitulo';
const URL = "https://54.237.108.108:3000/filme";
/**
 * TODO: Realizar a remoção de um filme e a atualização
 */
const renderRows = (movies, deleteMovie, updateMovies) => (
    movies.map((movie, _) => {
        return (
            <tr key={movie.titulo_idtitulo}>
                <th scope="row">{movie.titulo}</th>
                <td>{movie.titulo_idtitulo}</td>
                <td>{movie.datalancamento}</td>
                <td><EditTitulo updateMovies={updateMovies} movie={movie} /></td>
                <td><BtnIcon onClick={_ => deleteMovie(movie.titulo_idtitulo)} size="btn-small" icon='fas fa-trash-alt' color="danger" /></td>
            </tr>
        );
    })
);



const TabelaFilmes = props => {
    const deleteMovie = async (idTitulo) => {
        try {
            const response = await fetch(`${URL}/${idTitulo}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'aplication/json' }
            });
            props.getMovies();
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <table className='table table-hover table-dark table-sm'>
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Id Título</th>
                    <th scope="col">Data Lançamento</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Excluir</th>

                </tr>
            </thead>
            <tbody>
                {renderRows(Object.values(props.todosFilmes), deleteMovie, props.getMovies)}
            </tbody>
        </table>
    )
}

export default TabelaFilmes;