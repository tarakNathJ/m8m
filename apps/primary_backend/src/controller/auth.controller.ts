import { async_handler } from "../utils/async_handler.js";
import { api_error } from "../utils/api_error.js";
import {api_responce }from "../utils/api_responce.js";
import  {prisma } from "@master/database";
import  bcrypt from "bcrypt"



// sign up controller 

export  const sign_up_controller = async_handler (async(req ,res )=>{
    const { email , name , password} = req.body

    //chack email and name field are exist or not
    
    if (    
        [email , name ,password].some((field)=> field?.trim() === "")
    ){
        throw  new api_error(400, "all field are required ")
    }

    // chack, this email are exit in db of exit then return responce : sorry this email are exist in database

    const chack_email_in_out_database = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if (chack_email_in_out_database){
        throw new api_error (409 ,"this email id are all rady exist try anather  email ")
    }


    //  generate hash 
    const saltRounds = process.env.SALT_ROUNDS||10;

    const hash_password = bcrypt.hashSync(password ,saltRounds)

    // add new entry in our  db 

    const add_new_entry_in_our_db = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:hash_password,
            is_active:true,
            create_at: new Date()
        }
    })

    if(!add_new_entry_in_our_db){
        throw new api_error(400, "database entry  failed  try again")
    }

    return res.status(201).json( new api_responce(201,add_new_entry_in_our_db," sign up success fully "))
})