import Servico from '../models/Servico.js'
import Animal from '../models/Animal.js'
import Tutor from '../models/Tutor.js'
import Funcionario from '../models/Funcionario.js'

export default class servicoController{

    constructor(caminhoBase='servico/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            const animais = await Animal.find({})
            const tutores = await Tutor.find({})
            const funcionarios = await Funcionario.find({})
            res.render(caminhoBase + "add", {
                Animais:animais,
                Tutores:tutores,
                Funcionarios:funcionarios
            })
        }
        this.add = async(req, res)=>{

            let janimal = null;
            if(req.body.animal){
                janimal = await Animal.findById(req.body.animal)
            }
            let jtutor = null;
            if(req.body.tutor){
                jtutor = await Tutor.findById(req.body.tutor)
            }
            let jfuncionario = null;
            if(req.body.funcionario){
                jfuncionario = await Funcionario.findById(req.body.funcionario)
            }

            let fotoEnviada
            if(req.file!=null){
                fotoEnviada = req.file.buffer
            }
            else{
                fotoEnviada = null
            }

            await Servico.create({
                nome: req.body.nome,
                animal: janimal,
                tutor: jtutor,
                funcionario: jfuncionario,
                preco: req.body.preco,
                duracaoMinutos: req.body.duracaoMinutos,
                foto: fotoEnviada
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Servico.find({})
                .populate('animal')
                .populate('tutor')
                .populate('funcionario')
            res.render(caminhoBase + 'lst', {Servicos:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await
            Servico.find({ nome: { $regex: filtro,
                $options: "i" }})
                .populate('animal')
                .populate('tutor')
                .populate('funcionario')
            res.render(caminhoBase + 'lst', {Servicos:resultado})
        }

         this.openEdt = async(req, res)=>{
            //passar quem eu quero editar
            const id = req.params.id
            const servico = await Servico.findById(id)
            const animais = await Animal.find({})
            const tutores = await Tutor.find({})
            const funcionarios = await Funcionario.find({})
            res.render(caminhoBase + "edt", 
                {Servico:servico,
                Animais:animais,
                Tutores:tutores,
                Funcionarios:funcionarios})
        }


        this.edt = async(req, res)=>{
            let janimal = req.body.animal ? await Animal.findById(req.body.animal) : null;
            let jtutor = req.body.tutor ? await Tutor.findById(req.body.tutor) : null;
            let jfuncionario = req.body.funcionario ? await Funcionario.findById(req.body.funcionario) : null;

            let fotoEnviada
            if(req.file!=null){
                fotoEnviada = req.file.buffer
            }
            else{
                fotoEnviada = null
            }

            await Servico.findByIdAndUpdate(req.params.id, {
                nome: req.body.nome,
                animal: janimal,
                tutor: jtutor,
                funcionario: jfuncionario,
                preco: req.body.preco,
                duracaoMinutos: req.body.duracaoMinutos,
                foto: fotoEnviada
            })
            res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Servico.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}
