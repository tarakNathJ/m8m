import express from "express"
import cors from "cors"
import bodyParser from "body-parser"


class express_server {
    app = express()
    constructor(){
        this.app.use(cors({
            origin:"*"
        }))
        this.app.use(express.json())
        this.app.use(bodyParser.json())
    }
}


export default express_server;