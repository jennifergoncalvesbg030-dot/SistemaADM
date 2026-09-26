import conexao from '../config/conexao.js'

const Funcionario = conexao.Schema({
    nome: {type:String, required:true},
    cargo: {type:String, required:true}
})

export default conexao.model('Funcionario',Funcionario)
