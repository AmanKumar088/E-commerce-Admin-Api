const CategoryModule = require("../Model/CategoryModel");

exports.Pagination=async (request,response)=>{
    try{
        const page_no=request.query.page || 1;
        const limit=10;
        const total=await CategoryModule.find().concat();
        
    }catch{

    }
}