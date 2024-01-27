const AdminModule = require("../Model/AdminModel");
const { decoded } = require("../Utils/Utils");

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
                    response.json({
                        status:"success",
                        message:"admin login successfully"
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
