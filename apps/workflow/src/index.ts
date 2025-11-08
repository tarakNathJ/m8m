import express_server from "./app.js";
import { config } from "dotenv";

config({
    path:"./.env"
})
const PORT = process.env.PORT
if(!PORT){
    console.log("path not find")
}

new express_server().app.listen(PORT,()=>{
    console.log(`server  start at : ${PORT}`)
})

