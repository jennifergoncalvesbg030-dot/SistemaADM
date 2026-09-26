import conexao from '../config/conexao.js'

const Servico = conexao.Schema({
    nome: {type:String, required:true},
    animal:{type: conexao.Types.ObjectId, ref:"Animal", required:false},
    tutor:{type: conexao.Types.ObjectId, ref:"Tutor", required:false},
    funcionario:{type: conexao.Types.ObjectId, ref:"Funcionario", required:false},
    preco:{type:Number, required:true},
    duracaoMinutos:{type:Number, required:true},
    foto:{type:Buffer,
        get: (valor) => {
            if (!valor) return null;
            return `data:image/png;base64,${valor.toString('base64')}`;
        }
    }
})

export default conexao.model('Servico',Servico)
