# Banco_Digital - API REST Banco Digital

Visão Geral
Este é um projeto de API REST para um Banco Digital fictício. A API permite que os clientes realizem várias operações bancárias, como criar contas, fazer depósitos, saques, transferências e verificar o saldo da conta. Ela foi desenvolvida para proporcionar uma experiência bancária digital segura e conveniente aos clientes.

Tecnologias Utilizadas
Node.js
Express.js
Nodemon como dependência
JSON
Outras dependências especificadas no arquivo package.json

Pré-requisitos
Node.js instalado

Configuração
Clone o repositório para o seu sistema local:

Instale as dependências do projeto:

npm init -y
npm install express
npm install -D nodemom

Configure as variáveis de ambiente:

No arquivo Package.json, em "scripts", mude o objeto "test": para  {
    "dev": "nodemon ./src/index.js"
  },
Inicie o servidor:

No terminal , inicie o servidor com o comando 'npm run dev'

A API oferece as seguintes rotas:

GET /contas - Listar todas as contas
POST /contas - Criar nova conta
PUT /contas/:numeroConta/usuario - Atualizar dados da conta
DELETE /contas/:numeroConta - Excluir uma conta

POST /transacoes/depositar - Realizar um depósito na conta do cliente
POST /transacoes/sacar - Realizar um saque da conta do cliente
POST /transacoes/transferir - Realizar uma transferência entre contas

GET /contas/saldo - Verificar o saldo da conta
GET /contas/extrato - Listar as transações realizadas de uma conta específica

Aqui estão alguns prints da API em ação:



Contribuições
Contribuições são bem-vindas. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

