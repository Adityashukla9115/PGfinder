import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import PG from "./models/PG.js";

dotenv.config();

const app=express()
const PORT = process.env.PORT || 3000

//middleware
app.use(cors())
app.use(express.json())

//routes
app.get("/",(req,res)=>{
    res.send("PG Finder API running")
})

app.get("/pgs",async(req,res)=>{
    try{
        const pgs=await PG.find();
        res.status(200).json(pgs);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Failed to fetch PGs"});
    }
})

app.get("/pgs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const pg = await PG.findById(id);

    if (!pg) {
      return res.status(404).json({ message: "PG not found" });
    }

    res.status(200).json(pg);
  } catch (error) {
    console.error(error);

    // invalid ObjectId error
    res.status(400).json({ message: "Invalid PG ID" });
  }
});



//start server after DB connects
async function startServer() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo connected")

        app.listen(PORT,()=>{
        console.log(`app listening on port ${PORT}`)
        })
    } catch(error){
        console.error("Mongo connection failed",error.message)
        process.exit(1) // stop app if DB fails
    }
}
startServer();
