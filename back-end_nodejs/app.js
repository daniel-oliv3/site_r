const express = require('express');
const app = express();

const Home = require('./models/home');

app.use(express.json());

//Visualizar  
app.get('/', async (req, res) => {
    await Home.findOne()
    .then((data) => {
        return res.json({
            erro: false,
            data
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum valor encontrado para a página home!"
        });
    });
  });

//Cadastrar  
app.post('/cadastrar', async (req, res) => {
    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados para página home cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados para página home não foi cadastrado!"
        });
    });
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
  });