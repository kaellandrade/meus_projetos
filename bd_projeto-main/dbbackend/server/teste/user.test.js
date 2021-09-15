const axios = require('axios');
const filmeTituloVideo = require('../model/FilmeTituloVideoModel')
const filme = require('../model/FilmeModel');

const request = function (url, method, data) {
    return axios({ url, method, data });
};

test('Buscando todos os Usuários', async function () {
    const response = await request('https://localhost:3000/users', 'get');
    console.log(response.data);
});

test.only('listando todos os Filmes', async function () {
    const response = await request('https://localhost:3000/filmes', 'get')
    console.log(response.data);
});

test('Criando um Filme', async function () {
    const f = new filmeTituloVideo ('','','Homem Aranha', 'não tem', '2010-05-09', '2014', 100, '/path/path');
    const resp = await request('https://localhost:3000/filme', 'post', f);
    expect(resp.status).toBe(201)
});

test('Alterando um Filme', async function () {
    const f = new filmeTituloVideo (1, 1,'Salvando Vidas', 'sinopse', '2021-03-23', '2021', 45, '/path/path');
    const resp = await request(`https://localhost:3000/filme`, 'put', f);
    expect(resp.status).toBe(204);
});

test('Deletando um Filme', async function () {
    const f = new filme('2020-09-10', 1, 1); 
    const resp = await request(`https://localhost:3000/filme/${f.titulo_idtitulo}`, 'delete');
    expect(resp.status).toBe(204);
});
