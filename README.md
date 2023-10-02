# Banco_Digital - API REST Banco Digital

# Visão Geral

Este é um projeto de API REST para um Banco Digital fictício. A API permite que os clientes realizem várias operações bancárias, como criar contas, fazer depósitos, saques, transferências e verificar o saldo da conta. Ela foi desenvolvida para proporcionar uma experiência bancária digital segura e conveniente aos clientes.

# Tecnologias Utilizadas

Node.js
Express.js
Nodemon como dependência
JSON/
Outras dependências especificadas no arquivo package.json
Insomnia

# Pré-requisitos

Node.js instalado

# Configuração

**Clone o repositório para o seu sistema local:**

# Instale as dependências do projeto:

*npm init -y*

*npm install express*

*npm install -D nodemom*


**Configure as variáveis de ambiente:**

Crie um arquivo .gitignore e adicione a pasta node_modules
No arquivo Package.json, em "scripts", mude o objeto "test": para  {
    *"dev": "nodemon ./src/index.js"*
  },

**Inicie o servidor:**

No terminal , inicie o servidor com o comando 'npm run dev'

A API oferece as seguintes rotas:

# GET /contas - Listar todas as contas
# POST /contas - Criar nova conta
# PUT /contas/:numeroConta/usuario - Atualizar dados da conta
# DELETE /contas/:numeroConta - Excluir uma conta

# POST /transacoes/depositar - Realizar um depósito na conta do cliente
# POST /transacoes/sacar - Realizar um saque da conta do cliente
# POST /transacoes/transferir - Realizar uma transferência entre contas

# GET /contas/saldo - Verificar o saldo da conta
# GET /contas/extrato - Listar as transações realizadas de uma conta específica

Aqui estão alguns prints da API em ação:

**GET Buscar Contas - Teste Insomnia**
![GET Buscar Contas - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/d34673ba-cdf2-4168-a78f-c9b6b806ab22)


**POST Criar Conta - Teste Insomnia**
![POST Criar Conta - Test Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/9ef2ddda-b8af-4b2c-ae4f-f958d494f3b9)


**PUT Alterar dados da Conta - Teste Insomnia**
![PUT Alterar dados da Conta - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/26422eb8-3941-4a89-8908-9179e63d8f4f)


**DELETE Excluir Conta - Teste Insomnia**
![DELETE Excluir Conta - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/f7afffd2-f834-4878-ba13-3dbdc4c43db2)


**POST Saques - Teste Insomnia**
![POST Saques - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/882d3e93-c5d0-48e8-889f-9f61558431d8)


**POST Tranferencia - Teste Insomnia**
![POST Tranferencia - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/40ae5f15-1a22-47a2-9bbc-4279e1eb3b32)


**POST Depositos - Teste Insomnia**
![POST Depositos - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/93b0895b-d4cc-449d-8b21-be392daad42b)


**GET Ver Saldo - Teste Insomnia**
![GET Ver Saldo - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/057dbf98-9d6d-4b61-8721-c5c79a2f529f)


**GET Ver Extrato - Teste Insomnia**
![GET Ver Extrato - Teste Insomnia](https://github.com/LuzianaCardoso/Banco_Digital/assets/131216183/12adb76b-df3e-4def-97b9-76700b8f3038)





#Contribuições

*Contribuições são bem-vindas. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.*

