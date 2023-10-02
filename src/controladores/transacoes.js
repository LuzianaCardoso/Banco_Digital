const {contas, saques, transferencias, depositos} = require('../bancodedados');

const fazerDeposito = (req, res) => {
    const {numero_conta, valor} = req.body;

    if (!numero_conta || !valor) {

      return res.status(404).json({mensagem: "O número da conta e o valor são obrigatórios!"});
    }

    let buscaConta = contas.find((conta) => {
        return numero_conta === conta.numero;
    });

    if(buscaConta){
        if (valor > 0) {
           buscaConta.saldo += valor;
           const dataAgora = new Date();

            const deposito = {
                data: dataAgora.toLocaleDateString(),
                numero_conta,
                valor
            }
            depositos.push(deposito);

            return res.status(201).send();

        }else {
            return res.status(400).json({mensagem:'Valor inválido!'});
        }

    }
    return res.status(404).json({mensagem: 'A conta não existe!'});

}

const fazerSaque = (req, res) =>{
    const{numero_conta, valor, senha} = req.body;

    if (!numero_conta || !valor || !senha) {

        return res.status(404).json({mensagem: "O número da conta, valor e senha são obrigatórios!"});
      }
      
    let buscaConta = contas.find((conta) => {
        return numero_conta === conta.numero;
    });

    if(buscaConta){
        if (senha !== buscaConta.usuario.senha) {
            return res.status(403).json({mensagem:'Senha inválida'})
        }
        if (valor <= 0) {
            return res.status(400).json({mensagem: 'Valor inválido!'})
        }
        if (valor <= buscaConta.saldo) {
           buscaConta.saldo -= valor;
           const dataAgora = new Date();

            const saque = {
                data: dataAgora.toLocaleDateString(),
                numero_conta,
                valor
            }
            saques.push(saque);

            return res.status(201).send();

        }else {
            return res.status(400).json({mensagem:'Saldo insuficiente!'});
        }

    }
    return res.status(404).json({mensagem: 'A conta não existe!'});


}

const fazerTransferencia = (req, res) => {
    const {numero_conta_origem, numero_conta_destino, valor, senha} = req.body;

    if (!numero_conta_origem || !numero_conta_destino) {
        
        return res.status(404).json({mensagem: "Os dados são obrigatórios!"});
      }

    let buscaContaOrigem = contas.find((conta) => {
        return numero_conta_origem === conta.numero;
    });
    let buscaContaDestino = contas.find((conta) => {
        return numero_conta_destino === conta.numero;
    });

     
    if(buscaContaOrigem && buscaContaDestino){
        if (senha !== buscaContaOrigem.usuario.senha) {
            return res.status(403).json({mensagem:'Senha inválida'});
        }
        if (valor <= 0) {
            return res.status(400).json({mensagem:"O valor não pode ser menor que zero!"})
        }
        if (valor <= buscaContaOrigem.saldo) {
            buscaContaDestino.saldo += valor
            buscaContaOrigem.saldo -= valor

            const dataAgora = new Date();

            const transferencia = {
                data: dataAgora.toLocaleDateString(),
                numero_conta_origem,
                numero_conta_destino,
                valor
            }
            transferencias.push(transferencia);

            return res.status(201).send();
        }

        return res.status(404).json({mensagem: "Saldo insuficiente !"});        
        
    }
    return res.status(400).json({mensagem:"Essa conta não existe!"});

}


module.exports = {
    fazerDeposito,
    fazerSaque,
    fazerTransferencia
}