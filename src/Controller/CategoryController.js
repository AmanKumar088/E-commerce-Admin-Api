const CategoryModule = require("../Model/CategoryModel");


exports.AddCategory=async (request,response)=>{
    try{
        const bodyData=request.body
        const Data={
            name:bodyData.name,
            title:bodyData.title,
            category_name:bodyData.category_name
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


exports.GetAllCategory=async (request,response)=>{
    try{
        const res=await CategoryModule.find()
        if(res){
            response.json({
                status:"success",
                message:"all category show successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"invailed detalis",
            error:error
        })
    }
}


exports.SingleCategory=async (request,response)=>{
    try{
        const id=request.params.id
        const res=await CategoryModule.findOne({category_id:id})
        if(res){
            response.json({
                status:"success",
                message:"Single category show successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"invailed details",
            error:error
        })
    }
}


exports.UpdateCategory=async (request,response)=>{
    try{
        const id=request.params.id
        const bodyData=request.body;
        const query={
            name:bodyData.name,
            title:bodyData.title,
            category_name:bodyData.category_name
        }
        const res=await CategoryModule.updateOne({category_id:id},query)
        if(res){
            response.json({
                status:"success",
                message:"updateCategory successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"invailed details",
            error:error
        })
    }
}


exports.DeleteCategory=async (resquest,response)=>{
    try{
        const id=resquest.params.id
        const res=await CategoryModule.deleteOne({category_id:id})
        if(res){
            response.json({
                status:"success",
                message:"Delete category successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"falied",
            message:"invailed details",
            error:error
        })
    }
}
