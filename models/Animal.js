import conexao from '../config/conexao.js'

const Animal = conexao.Schema({
    nome: {type:String, required:true},
    especie: {type:String, required:true},
    raca: {type:String, required:true}
})

export default conexao.model('Animal',Animal)
