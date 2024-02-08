const AdminModule = require("../Model/AdminModel");
const { decoded, tokenTime } = require("../Utils/Utils");
const jwt=require('jsonwebtoken')
require("dotenv").config();

exports.AdminSignup=async(request,response,next)=>{
    try{
        const bodyData=request.body;
        const Data={
            name:bodyData.name,
            email:bodyData.email,
            phone:bodyData.phone,
            password:bodyData.password
        }

        const res=await AdminModule.create(Data)
        if(res){
            response.json({
                status:"success",
                message:"admin signup successfully",
                data:{
                    name:res.name,
                    email:res.email,
                    phone:res.phone
                }
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"falied to signup",
            error:error
        })
    }
}


exports.AdminLogin=async (request,response)=>{
    try{
        const bodyData=request.body
        const data={
            email:bodyData.email
        }
        const res=await AdminModule.findOne(data)
        if(res){
            if(decoded(bodyData.password,res.password)){
                const bindKey={
                    time:Date(),
                    user_id:res._id,
                    name:res.name,
                    email:res.email,
                    phone:res.phone
                }
            const SecretKey=process.env.SECRET_KEY
            const token=jwt.sign(bindKey,SecretKey,tokenTime())
                    response.json({
                        status:"success",
                        token:token,
                        data:{
                            name:res.name,
                            email:res.email,
                            phone:res.phone,
                            user_id:res._id
                        },
                        message:"admin login successfully",
                    })
            }else{
                response.json({
                    status:"falied",
                    message:"incorred password"
                }) 
            }
        }else{
            response.json({
                status:"falied",
                message:"incorred detalis"
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"invalid user",
            error:error
        })
    }
}


exports.AdminForgetPassword=async (request,response)=>{
    try{
        
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed details",
            error:error
        })
    }
}
