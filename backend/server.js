import express from "express"
import chats from "./DATA/data.js"
import dotenv from "dotenv"
import cors from "cors"
import Connectdb from "./config/connectdb.js"
import Routes from "./Routes/userRoutes.js"
import { errorHandler,notFound } from "./middleware/errormiddleware.js"
const app=express();
app.use(express.json());
app.use(cors())
dotenv.config();

const PORT=process.env.PORT||5000;
var uri= process.env.MONGO_URI

Connectdb(uri);


app.use("/api/user",Routes)
app.use(notFound);
app.use(errorHandler);
// app.get("/api/chats",(req,res)=>{
//     res.send(chats)
// })

// app.get("/chats/:id",(req,res)=>{
//     res.send(chats.find((ele)=>{
//        return ele._id==req.params.id
//         }))
// })



app.listen(PORT,console.log(`server started on port ${PORT}`))