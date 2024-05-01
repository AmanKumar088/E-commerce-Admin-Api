const PlaceOrderModel = require("../Model/PlaceOrderModel");

exports.PlaceOrderController=async (request,response)=>{
    try{
        const RequestBody=request.body;
        
    }catch(error){
        response.status(500).json({
            status:"failed",
            message:"An error occurred while placing the order",
            error:error
        })
    }
}