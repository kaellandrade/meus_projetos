import React from "react";
import Container from "../layout/Container";
import Grid from "../layout/Grid";
import Row from "../layout/Row";
import Dcomp from '../assets/dcomp_logo.png'


const Sobre = (props) => {
  return (
    <Container>
      <Row>
        <h2 className='display-3 mb-5 mt-5 text-center' >Banco De Dados <small>(Trabalho Prático)</small></h2>
        <Grid cols='12 12 6' className='d-flex align-items-center'>
          <img className='img-fluid mb-5' src={Dcomp} alt="" />
        </Grid>
        <Grid cols='12 12 6'>
          <p className='fist-l'>
            O trabalho prático consiste na modelagem e criação de um banco de
            dados, além do desenvolvimento de aplicação que irá fazer o CRUD
            (Create, Read, Update and Delete) das entidades envolvidas no projeto.
            O projeto escolhido envolve entidades referentes a um serviço de
            filmes (semelhante a um Netlfix, Prime, etc).
          </p>
          <p>
            Obrigatoriamente, a aplicação desenvolvida deve ser Web ou Mobile. A
            aplicação deve ter um front-end e um back-end. O front-end será
            responsável pelas telas de cadastro e consulta das entidades. O
            back-end deverá conter o SGBD que armazenará os dados e as rotinas
            necessárias para o armazenamento.
          </p>

          <p >
            A aplicação deve ser acessível de qualquer computador/dispositivo
            móvel. Assim, o grupo deve usar uma estrutura de nuvem disponível. A
            recomendação é utilizar o Heroku (tutorial disponibilizado no SIGAA),
            mas o grupo pode usar qualquer outro Iaas ou Paas (Azure, Aws, etc.).
          </p>
        </Grid>
      </Row>
    </Container>
  );
};

export default Sobre;
