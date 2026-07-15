const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://arathir:arathirnair@ac-g0cyi5b-shard-00-00.egyqa6b.mongodb.net:27017,ac-g0cyi5b-shard-00-01.egyqa6b.mongodb.net:27017,ac-g0cyi5b-shard-00-02.egyqa6b.mongodb.net:27017/petboardingdb?ssl=true&replicaSet=atlas-89qct9-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("mongodb connected")
    }
).catch(
    (error)=>{
console.log(error)
    }
)
const pet=mongoose.model("pet",new mongoose.Schema(
    {
        bookingID:String,
        petName:String,
        petType:String,
        breed:String,
        age:String,
        weight:String,
        vaccinationStatus:String,
        ownerName:String,
        ownerPhone:String,
        ownerEmail:String,
        checkinDate:String,
        checkoutDate:String,
        kennelNum:String
    }
))

app.post("/add-pet",async(req,res)=>{
    await pet.create(req.body)
    res.json({"status":"success"})
})
app.post("/view-pet",async(req,res)=>{
    const pets=await pet.find()
    res.json(pets)
})

app.listen(1000,()=>{
    console.log("server started")
})