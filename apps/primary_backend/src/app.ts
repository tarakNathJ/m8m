import express from "express";
import type{ Express} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routers from "./router/index.js";




class express_app {
    public  app: Express = express();

    constructor (){
        this.app.use(cors({
            origin: "*"
        }))

        this.app.use(express.json())
        this.app.use(cookieParser())
        this.app.use("/api/auth",routers);
    }
}


export { express_app };