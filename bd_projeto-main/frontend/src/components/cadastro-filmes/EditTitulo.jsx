import React, { Fragment, useState } from 'react';
import Grid from "../../layout/Grid";
import Row from "../../layout/Row";
const URL_FILMES = "https://54.237.108.108:3000/filme";


const EditTitulo = props => {
    const [movie, setMovie] = useState({ ...props.movie });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const body = {
                ...data,
                titulo_idtitulo: props.movie.titulo_idtitulo,
                video_idvideo: props.movie.video_idvideo,
                ano:props.movie.ano
            };
            const response = await fetch(`${URL_FILMES}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            props.updateMovies();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <button onClick={_ => { setMovie(props.movie) }} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#exampleModal${movie.titulo_idtitulo}`} data-bs-whatever="@mdo">
                <i className="fas fa-edit"></i>
            </button>
            <div className="modal fade text-dark" id={`exampleModal${movie.titulo_idtitulo}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Atualizar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <Row>
                                    <Grid cols='12 12 6' className=''>
                                        <div className="">
                                            <label htmlFor="recipient-titulo" className="col-form-label">Título</label>
                                            <input
                                                name="titulo"
                                                placeholder="Hobbit"
                                                id="recipient-titulo"
                                                type="text"
                                                className="form-control"
                                                value={movie.titulo}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="recipient-sinopse" className="col-form-label">Sinopse</label>

                                            <textarea
                                                rows="5"
                                                name="sinopse"
                                                placeholder="Sinopse"
                                                id="recipient-sinopse"
                                                type="text"
                                                className="form-control"
                                                value={movie.sinopse}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid cols='12 12 6' className=''>
                                        <div className="">
                                            <label htmlFor="recipient-anoLancamento" className="col-form-label">Ano de Lançamento</label>
                                            <input
                                                name="datalancamento"
                                                placeholder="Ano de Lançamento"
                                                id="recipient-anoLancamento"
                                                type="date"
                                                className="form-control"
                                                value={movie.datalancamento}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="recipient-duracao" className="col-form-label">Duração</label>
                                            <input
                                                name="duracao"
                                                placeholder="Duração"
                                                id="recipient-duracao"
                                                type="number"
                                                className="form-control"
                                                value={movie.duracao}
                                                onChange={handleInputChange}
                                            />

                                        </div>

                                        <div className="">
                                            <label id="Inputpass" htmlFor="recipient-path" className="col-form-label">Local do Vídeo</label>
                                            <input
                                                id="recipient-path"
                                                name="caminhodoarquivo"
                                                type="text"
                                                className="form-control"
                                                value={movie.caminhodoarquivo}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </Grid>


                                </Row>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="sibmit" className="btn btn-warning" data-bs-dismiss="modal">Atualizar</button>
                            </div>
                        </form>

                    </div>


                </div>
            </div>

        </Fragment>

    );
}

export default EditTitulo;