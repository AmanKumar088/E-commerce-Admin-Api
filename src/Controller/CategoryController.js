const CategoryModule = require("../Module/CategoryModule")


exports.AddCategory=async (request,response)=>{
    try{
        const bodyData=request.body
        const Data={
            name:bodyData.name,
            slug:bodyData.slug,
            persent_id:bodyData.persent_id
        }

        const ww=await CategoryModule.create(Data)
        if(ww){
            response.json({
                status:"success",
                message:"category add successfully",
                data:ww
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"falied",
            error:error
        })
    }
}