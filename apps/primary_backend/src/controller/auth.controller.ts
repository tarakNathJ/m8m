import { async_handler } from "../utils/async_handler.js";
import { api_error } from "../utils/api_error.js";
import {api_responce }from "../utils/api_responce.js";
import  {prisma } from "@master/database";
import  bcrypt from "bcrypt";
import  JWT from "jsonwebtoken"
import { config } from "dotenv";

config()


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
   

    //  generate hash and chack hash are  generate or not
    const saltRounds =  bcrypt.genSaltSync(10 );
    console.log("chack point : 2.5")
    const hash_password =bcrypt.hashSync(password , saltRounds)

    if (!hash_password){
        return new api_error(400,"password hashing are failed , try again lata")
    }


    // add new entry in our  db 
    
    const add_new_entry_in_our_db = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:hash_password,
            is_active:true,
            create_at: new Date()
        },
        select:{
            name,
            email
        }
    })

   
    if(!add_new_entry_in_our_db){
        throw new api_error(400, "database entry  failed  try again")
    }

    return res.status(201).json( new api_responce(201,add_new_entry_in_our_db," sign up success fully "))
})


// login controller 

export  const  login_controller = async_handler (async (req ,res)=>{
    const  { email , password} = req.body;

    // chack required fields 
    // chack user email id  are exit or not 
    // then chack password 
    // create access token 
    // return responce
    if ([email , password].some((field)=>field.trim() === "")){
        throw  new api_error(400,"all field are required")
    }

    const chack_email_in_out_db = await prisma.user.findFirst({
        where:{
            email:email,
            is_active:true
        },
        select:{
            password :true,
            email:true
        }
    })
    if (!chack_email_in_out_db){
        throw new api_error(404,"user not found ")
    }



    const matching_password_and_hash  =bcrypt.compareSync(password ,chack_email_in_out_db.password)
    if (!matching_password_and_hash) {
        throw new api_error(401,"Invalid credentials. Password does not match");     
    }
    const token = {
         email: chack_email_in_out_db.email,
    }


    const secret = process.env.JWT_SECRET
    if(!secret){
        throw new api_error(400," env not exist "); 
    }
    const access_token = JWT.sign(token, secret)
    if (!access_token){
        throw new api_error(400,"  failed to create  access token  ");   
    }

    return res.status(200).json(
        new api_responce(200,{
            access_token,
            email 
        }," login success fully")
    )

})