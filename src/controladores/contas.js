const {banco,contas} = require('../bancodedados');

const listarContas = (req, res) =>{
    const {senha_banco} = req.query

    if (senha_banco) {
        let resultado = () => {
            return senha_banco === banco.senha
        };
       if (resultado) {
        return res.json(contas);
       }
       return res.status(401).json({mensagem: "A senha do banco informada é inválida!" });
    };
    return res.status(404).json({mensagem:"A senha é obrigatória"});


};

const criarConta = (req, res) => {
    const novaConta = req.body;
    let cpfExiste = false;
    let emailExiste = false;

    if (novaConta.nome && novaConta.cpf && novaConta.data_nascimento &&
         novaConta.telefone && novaConta.email && novaConta.senha) {
        
            for (let conta of contas) {
                if (conta.usuario.cpf === novaConta.cpf) {
                    cpfExiste = true
                    break
                };
                if (conta.usuario.email === novaConta.email) {
                    emailExiste = true
                    break
                };
            }

            if(cpfExiste || emailExiste){
                return res.status(403).json({mensagem: "Já existe uma conta com o cpf ou e-mail informado!"})
            }

            const contaCriada = {
                numero: contas.length > 0 ? (Number(contas[contas.length - 1].numero) + 1).toString() : "1",
                saldo: 0,
                usuario: {
                    nome: novaConta.nome,
                    cpf: novaConta.cpf,
                    data_nascimento: novaConta.data_nascimento,
                    telefone: novaConta.telefone,
                    email: novaConta.email,
                    senha: novaConta.senha
                }
            }
            contas.push(contaCriada);
            return res.status(201).send();
    }
    return res.status(404).json({mensagem: "O campo é obrigatório!"});

};

const atualizarConta = (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    let cpfExiste = false;
    let emailExiste = false;

    let buscaConta = contas.find((conta) => {
        return numeroConta === conta.numero;
    });

    if (buscaConta) {
        for (let conta of contas) {
            if (conta.usuario.cpf === cpf) {
                cpfExiste = true
                break
            }
        }

        for (let conta of contas) {
            if (conta.usuario.email === email) {
                emailExiste  = true
                break
            }
        }
            if(cpfExiste){
                return res.status(403).json({mensagem: "Já existe uma conta com o cpf informado!"})
            }
            
            if(emailExiste){
                return res.status(403).json({mensagem: "Já existe uma conta com o e-mail informado!"})
            }
            
            buscaConta.usuario.nome = nome;
            buscaConta.usuario.cpf = cpf;
            buscaConta.usuario.data_nascimento = data_nascimento;
            buscaConta.usuario.telefone = telefone;
            buscaConta.usuario.email = email;
            buscaConta.usuario.senha = senha;

            return res.status(203).send();

        }
        
        return res.status(404).json({mensagem:'Essa conta não existe'});
    }
   
const excluirConta = (req, res) =>{
    const { numeroConta } = req.params;
    
    let buscaConta = contas.find((conta) => {
        return numeroConta === conta.numero;
    });

    if (buscaConta) {
        if (buscaConta.saldo === 0) {
            let index = contas.findIndex((conta) =>{
                return numeroConta === conta.numero
            });
            contas.splice(index, 1);
            return res.status(204).send();

        }else{
            return res.status(403).json({mensagem: "A conta só pode ser removida se o saldo for zero!"});
        }
    }
    return res.status(404).json({mensagem: "A conta não existe"})
}
    


module.exports = {
    listarContas,
    criarConta,
    atualizarConta,
    excluirConta
}
    