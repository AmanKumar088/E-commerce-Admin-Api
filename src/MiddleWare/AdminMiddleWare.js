const jwt=require('jsonwebtoken');
require('dotenv').config()

exports.AdminMiddleWare=async (request,response,next)=>{
    try{
        
        const token=request.headers['authorization'].split(" ")[1]
        const sceret_key=process.env.SECRET_KEY
        const data=jwt.verify(token,sceret_key)
        if(data){
            request.id=data.user_id;
            next()
        }else{
            response.status(404).json({
                    status:"failed",
                    message:"Unauthrized user"
            })
        }
    }catch(error){
        // console.log(error)
        response.json({
            status:"failed",
            message:"user Authorization",
            error:error
        })
    }
}