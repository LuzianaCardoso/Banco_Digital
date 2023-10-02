const {contas, saques, transferencias, depositos} = require('../bancodedados');

const verSaldo = (req, res) => {
    const {numero_conta, senha} = req.query;
    
    if (!numero_conta || !senha) {
    
        return res.status(404).json({mensagem:"A senha e conta são obrigatórias"});
        
    }
    let buscaConta = contas.find((conta) => {
        return numero_conta === conta.numero;
    });

    if (buscaConta) {
        if (senha === buscaConta.usuario.senha) {
            return res.status(200).json({saldo: buscaConta.saldo});
        }
        return res.status(401).json({mensagem: "Senha inválida"})
    }
    return res.status(404).json({mensagem: "Conta bancária não encontrada!"});

}

const verExtrato = (req, res) => {
    const {numero_conta, senha} = req.query;

    if (!numero_conta) {
    
        return res.status(404).json({mensagem:"O numero da conta é obrigatório"});
        
    }
    if (!senha) {
    
        return res.status(404).json({mensagem:"A senha é obrigatória"});
        
    }

    let buscaConta = contas.find((conta) => {
        return numero_conta === conta.numero;
    });

    if (buscaConta) {
        if (senha === buscaConta.usuario.senha) {
            const extrato = {
                depositos: depositos.filter((dep) =>{
                    return dep.numero_conta === numero_conta
                }),
                saques: saques.filter((saq) =>{
                    return saq.numero_conta === numero_conta
                }),
                transferenciasEnviadas: transferencias.filter((transf) =>{
                    return transf.numero_conta_origem === numero_conta
                }),
                transferenciasRecebidas: transferencias.filter((transf) =>{
                    return transf.numero_conta_destino === numero_conta
                })
            }
            return res.status(200).json({extrato});
        }
        return res.status(401).json({mensagem: "Senha inválida"});
    }
    return res.status(404).json({mensagem: "Conta bancária não encontrada!"});

}


module.exports = {
    verSaldo,
    verExtrato
}