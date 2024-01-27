const jwt=require('jsonwebtoken');
require('dotenv').config()

exports.AdminMiddleWare=async (request,response,next)=>{
    try{
        
        const token=request.headers['token']
        const sceret_key=process.env.SECRET_KEY
        const data=jwt.verify(token,sceret_key)
        if(data){
            request.id=data.userId;
            next()
        }else{
            response.status(404).json({
                    status:"failed",
                    message:"Unauthrized user"
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"user Authorization",
            error:error
        })
    }
}