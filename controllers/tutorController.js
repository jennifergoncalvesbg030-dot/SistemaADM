import Tutor from '../models/Tutor.js'

export default class tutorController{

    constructor(caminhoBase='tutor/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Tutor.create({
                nome: req.body.nome,
                telefone: req.body.telefone
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Tutor.find({})
            res.render(caminhoBase + 'lst', {tutores:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Tutor.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {tutores:resultado})
        }

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            const tutor = await Tutor.findById(id)
            res.render(caminhoBase + "edt", {tutor})
        }

             this.edt = async(req, res)=>{
            await Tutor.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/'+caminhoBase + 'lst');
                
        }
        
            this.del = async(req, res)=>{
            await Tutor.findByIdAndDelete(req.params.id)
            res.redirect('/'+caminhoBase + 'lst');
                
        }
        

    }
}
