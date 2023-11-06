import { app } from "./app";
import "dotenv/config"
import env from "./util/validatenv"
import mongoose from "mongoose";



const port = env.PORT;


async function connectDb() {

    try {
        
        await mongoose.connect(env.Mongo_Connect)

        app.listen(port, ()=>{
            console.log("server has been started on the port "+port)
        })
        

    } catch (error) {
        console.error(error)
        alert(error)
    }
    
}

connectDb()





