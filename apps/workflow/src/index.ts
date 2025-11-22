import express_server from "./app.js";
import { config } from "dotenv";

config({
    path:"./.env"
})
// @ts-ignore
const PORT = parseInt(process.env.PORT)
if(!PORT){
    console.log("path not find")
}


new express_server().app.listen(PORT || 4000, "0.0.0.0",()=>{
    console.log(`server  start at : ${PORT}`)
})

