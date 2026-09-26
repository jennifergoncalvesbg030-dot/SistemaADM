import Animal from '../models/Animal.js'

export default class animalController{

    constructor(caminhoBase='animal/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Animal.create({
                nome: req.body.nome,
                especie: req.body.especie,
                raca: req.body.raca
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Animal.find({})
            res.render(caminhoBase + 'lst', {animais:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Animal.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {animais:resultado})
        }

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            const animal = await Animal.findById(id)
            res.render(caminhoBase + "edt", {animal})
        }
         this.edt = async(req, res)=>{
         await Animal.findByIdAndUpdate(req.params.id, req.body)
         res.redirect('/'+caminhoBase + 'lst');
         
         }
 
          this.del = async(req, res)=>{
         await Animal.findByIdAndDelete(req.params.id)
         res.redirect('/'+caminhoBase + 'lst');
         
         }       
        

    }
}
