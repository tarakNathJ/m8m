import { express_app } from "./app.js"
import { config } from "dotenv"

config({
    path:"./.env"
})


const PORT = process.env.PORT || 4000

new express_app().app.listen(PORT , ()=>{
    console.log("server start at :" , PORT);
})