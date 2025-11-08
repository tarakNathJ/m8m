import { express_app } from "./app.js"
import { config } from "dotenv"

config({
    path:"./.env"
})

// Start the server (example: listen on port 3000)
new express_app().app.listen(3000 , ()=>{
    console.log("server start at 3000")
})