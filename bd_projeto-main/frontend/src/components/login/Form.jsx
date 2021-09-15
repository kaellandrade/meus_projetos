import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
/**
 * Formulário da tela de login;
 */
const Form = (props) => {
  const [formValues, setFormValues] = useState({});
  const history = useHistory();

  const validate = async (user) => {
    const users = await fetch("https://54.237.108.108:3000/users");
    const usersDate = await users.json();
    const isValidLogin = usersDate.filter(
      (usuario, _) => (user.email === usuario.login && user.senha === usuario.senha)
    );
    return isValidLogin;
  }

  const handleInputChange = (e) => {    //Função responsável pela mudança no estado da aplicação
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";
    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = async (e) => { //Função que devolve os dados tratados
    e.preventDefault();
    const res = await validate(formValues);
    if (res.length) {
      history.push('/catalogo')
    }
    else
      alert("Descupe, senha ou email inválidos.")
  };

  return (
    <div>
      <div className="mb-5">
        <input
          name="email"
          placeholder="E-mail"
          id="InputEmail"
          type="email"
          onChange={handleInputChange}
          value={formValues.email || ""}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          name="senha"
          onChange={handleInputChange}
          value={formValues.senha || ""}
          placeholder="Senha"
          id="Inputpass"
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-5 form-check">
        <input
          id="exampleCheck1"
          className="form-check-input"
          type="checkbox"
          name="lembrar"
          value="lembrarDados"
          onChange={handleInputChange}
          id="check"
        />
        <label className="form-check-label" htmlFor="check">
          Lembrar
        </label>
      </div>
      <div className="d-grid gap-2">
        <button className='btn btn-danger' onClick={handleSubmit} >Entrar</button>
      </div>
    </div>
  );
};

export default Form;
