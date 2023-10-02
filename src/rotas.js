const express = require('express');
const contas = require('./controladores/contas');
const transacoes = require('./controladores/transacoes');
const comprovantes = require('./controladores/comprovantes');


const rotas = express();

rotas.get('/contas', contas.listarContas);
rotas.post('/contas',contas.criarConta);
rotas.put('/contas/:numeroConta/usuario',contas.atualizarConta);
rotas.delete('/contas/:numeroConta', contas.excluirConta);

rotas.post('/transacoes/depositar', transacoes.fazerDeposito);
rotas.post('/transacoes/sacar', transacoes.fazerSaque);
rotas.post('/transacoes/transferir', transacoes.fazerTransferencia);

rotas.get('/contas/saldo', comprovantes.verSaldo);
rotas.get('/contas/extrato', comprovantes.verExtrato);


module.exports = rotas;