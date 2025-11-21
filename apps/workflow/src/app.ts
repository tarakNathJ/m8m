import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./router/index.route.js"
import { metrix_handler } from "@repo/handler"


class express_server {
    app = express()
    constructor(){
        this.app.use(cors({
            origin:"*"
        }))
        this.app.use(express.json())
        this.app.use(bodyParser.json())
        this.app.use("/api/workflow",router);
        this.app.get("/metrics",metrix_handler)
    }
}


export default express_server;