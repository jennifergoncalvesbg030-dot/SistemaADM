import conexao from '../config/conexao.js'

const Tutor = conexao.Schema({
    nome: {type:String, required:true},
    telefone: {type:String, required:true}
})

export default conexao.model('Tutor',Tutor)
