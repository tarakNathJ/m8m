import express from "express";
import { sign_up_controller,login_controller } from "../controller/auth.controller.js";


const routers = express.Router();

routers.route("/signup").post(sign_up_controller);
routers.route("/login").post(login_controller);

export default  routers


