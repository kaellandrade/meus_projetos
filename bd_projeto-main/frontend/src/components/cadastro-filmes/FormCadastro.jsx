import React from "react";
import BtnIcon from "../BtnIcon";
import { useState } from "react";
import Grid from "../../layout/Grid";
import Row from "../../layout/Row";
const URL_FILME = "https://54.237.108.108:3000/filme";

/**
 * Formulário da tela de cadastro;
 */
const Form = (props) => {
  const valorInicial = { titulo: "", sinopse: "", datalancamento: "", duracao: "", caminhodoarquivo: "", ano: "" };
  const [formValues, setFormValues] = useState({ ...valorInicial });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  /**
   * Função responsável por controlar o estado fo formulário.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch(URL_FILME, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      props.getMovies();
      setFormValues({ ...valorInicial });
    } catch (error) {
      console.error(error.message);
    }
  };

  /**
   * Limpa o formulário.
   */
  const clearForm = _ => {
    setFormValues({ ...valorInicial });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>

        <Grid cols='12 12 6' className='mt-5 mb-5'>
          <div className="mb-3">
            <input
              name="titulo"
              placeholder="Título"
              id="InputTitulo"
              type="text"
              value={formValues.titulo}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <textarea
              rows="3"
              name="sinopse"
              placeholder="Sinopse"
              id="InputSinopse"
              type="text"
              value={formValues.sinopse}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              name="datalancamento"
              placeholder="Ano de Lançamento"
              id="InputAnoLancamento"
              type="date"
              value={formValues.datalancamento}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </Grid>

        <Grid cols='12 12 6' className='mt-5 mb-5'>
          <div className="mb-3">
            <input
              name="ano"
              placeholder="Ano de Lançamento"
              id="InputAnoLancamento"
              type="year"
              value={formValues.ano}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              name="duracao"
              placeholder="Duração"
              id="InputDirecao"
              type="number"
              value={formValues.duracao}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Local do arquivo"
              id="Inputpass"
              name="caminhodoarquivo"
              type="text"
              className="form-control"
              value={formValues.caminhodoarquivo}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-grid gap-1 d-flex flex-grow-1">
            <BtnIcon color="danger w-100" icon="fas fa-sign-in-alt">
              Cadastrar
            </BtnIcon>
            <BtnIcon onClick={clearForm} color="warning w-100" icon="fas fa-sign-in-alt">
              Limpar
            </BtnIcon>
          </div>
        </Grid>
      </Row>
    </form>
  );
};

export default Form;
