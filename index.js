import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import registerModel from './models/registerSchema.js'



const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));

app.get('/profiles', (req,res) => {
   registerModel.find()
   .then(registers => res.json(registers))
   .catch(err => res.json(err))

})

app.get('/profile/:username',async (req,res) =>{
    try{
        const user = await registerModel.find({name : req.params.username})
        console.log(req.params.name);
        if(!user){
            return res.status(404).json({message : 'User not found'})
        }else{
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(user)
        }
        
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'Server Error'})
    }
    
})

app.get('/updatedProfile/:username',async (req,res) =>{
    try{
        const user = await registerModel.find({name : req.params.username})
        if(!user){
            return res.status(404).json({message : 'User not found'})
        }else{
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(user)
        }
        
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'Server Error'})
    }
    
})
app.patch('/updatedProfile/:username',async (req,res) =>{
    
    const {_id,name,password,email} = req.body
    const updatedProfile = await registerModel.findOneAndUpdate(
        {name:req.params.username},
        {_id,name,password,email},
        {new : true}
        )

    if(!updatedProfile){
        return res.status(404).json({error: ' Utente non trovato '})
    }

    res.status(200).json({message: 'Profilo aggiornato con successo', updatedProfile: updatedProfile})
    console.log(updatedProfile)

})


app.post('/register', (req,res) =>{
    registerModel.create(req.body)
    .then((registers) => res.json(registers))
    .catch((err)=> res.json(err))
})

app.post('/login', (req,res) =>{
    const { name,password} = req.body
    registerModel.findOne({name: name})
    .then(user => {
        if(user) {
            if(user.password === password ){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.delete('/profile/:username' , async (req,res) =>{
    const { username } = req.params
    try {
        const deletedUser = await registerModel.deleteOne({name : username})
        if(deletedUser){
            res.send({status: "OK", data:"Deleted"})
            res.status(200).json({message : " everything is ok "})
        }
        else{
            res.status(500).json({message : " an error as occured"})
        }
    } catch (error) {
        console.error(error)
    }
})

async function Start() {
    await mongoose.connect('mongodb+srv://cicciovastasu:pescedicrema99@chess.thars4u.mongodb.net/?retryWrites=true&w=majority');

    app.listen(3001, () => console.log("server running"));
}

Start()

