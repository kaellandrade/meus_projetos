// definição das rotas
const express = require('express');
const router = express.Router();

const UserService = require('../service/UserService');
const FilmeService = require('../service/FilmeService');

// ROTA BUSCAR OS USUÁRIOS
router.get('/users', async function (req, res) { 
    const users = await UserService.getUsers();
    res.json(users);
});

// ROTA BUSCAR TODOS OS FILMES
router.get('/filmes', async function (req, res) { 
    const filmes = await FilmeService.getFilmes();
    res.json(filmes);
});


// ROTA PARA CRIAR UM FILME
router.post('/filme', async function (req, res) {
    const filme = req.body;
    const newTitulo = await FilmeService.saveFilme(filme);
    res.status(201).json(newTitulo);
})

// ROTA PARA ALTERAR UM FILME
router.put('/filme', async function (req, res) {
    const filme = req.body;
    try {
        await FilmeService.updateFilme(filme);
        res.status(204).end();
    } catch (e) {
        res.status(404).send(e.message);
    }
})

// ROTA PARA DELETAR UM FILME
router.delete('/filme/:titulo_idtitulo', async function (req, res) {
    await FilmeService.deleteFilme(req.params.titulo_idtitulo);
    res.status(204).end();
})

module.exports = router;