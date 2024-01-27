const SubCategoryModule = require("../Model/SubCategoryModel");

exports.AddSubCategory=async (request,response)=>{
    try{
        const bodyData=request.body
        const Adddata={
            category_name:bodyData.category_name,
            sub_category_name:bodyData.sub_category_name
        }

        const res=await SubCategoryModule.create(Adddata)
        if(res){
            response.json({
                status:"success",
                message:"Add sub category successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed",
            error:error 
        })
    }
}


exports.SingleSubCategory=async (request,response)=>{
    try{
        const id=request.params.id
        const res=await SubCategoryModule.find({sub_category_id:id}) 
        if(res){
            response.json({
                status:"success",
                message:"Single subCategory show successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed",
            error:error
        })
    }
}


exports.UpdateSubCategory=async (request,response)=>{
    try{
        const id=request.params.id;
        const bodyData=request.body;
        const updateData={
            category_name:bodyData.category_name,
            sub_category_name:bodyData.sub_category_name
        }

        const res=await SubCategoryModule.updateOne({sub_category_id:id},updateData)
        if(res){
            response.json({
                status:"success",
                message:"update successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed",
            error:error
        })
    }
}


exports.DeleteSubCategory=async (request,response)=>{
    try{
        const id=request.params.id;
        const res=await SubCategoryModule.deleteOne({sub_category_id:id});
        if(res){
            response.json({
                status:"success",
                message:"delete successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed",
            error:error
        })
    }
}


exports.GetAllSubCategory=async (request,response)=>{
    try{
        const res=await SubCategoryModule.find()
        if(res){
            response.json({
                status:"success",
                message:"get All subcategory successfully",
                data:res
            })
        }
    }catch(error){
        response.json({
            status:"failed",
            message:"invailed",
            error:error
        })
    }
}