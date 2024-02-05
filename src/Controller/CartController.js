const { ObjectId } = require("mongodb");
const CartModel = require("../Model/CartModel");
exports.AddCartController = async (request, response) => {
    try {
        const body = request.body;
        const productData = {
            user_id: body.user_id,
            product_id: body.product_id,
            product_qunatity: body.product_qunatity
        }

        const tt = await CartModel.create(productData)
        if (tt) {
            response.json({
                status:"success",
                message:"successfully add cart",
                data:tt
            })
        }
    } catch (error) {
        // console.log(error)
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}


exports.updateCartController=async (request,response)=>{
    try{
            const id=request.params.user_id
            const body=request.body

            const cartUpdate={
                product_id:body.product_id,
                product_qunatity:body.product_qunatity
            }

            const rr=await CartModel.updateOne({_id:id},cartUpdate)
            if(rr){
                response.json({
                    status:"success",
                    message:"update cart successfully",
                    data:rr
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


exports.DeleteCart=async (request,response)=>{
    try{
        const id=request.params._id;
        const body=request.body;
        const deleteCart={

        }

        const ee=await CartModel.deleteOne({_id:id},deleteCart)
        if(ee){
            response.json({
                status:"success",
                message:"delete cart successfully",
                data:ee
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

exports.CartJoinController = async (request, response) => {

    try {

        const body=request.body;
        console.log(body.user_id)
        const res = await CartModel.aggregate([{ $match: {user_id:new ObjectId(body.user_id)} },
           {
            $lookup:{
                    from:"products",
                    localField:"product_id",
                    foreignField:"_id",
                    as:"cartDetails"
            }
        },{$project:{user_id:0,_id:0}}
    ])

        if(res){
            response.json({
                status:"success",
                message:"cart join successfully",
                data:res
            })
        }

    } catch (error) {
        console.log(error)
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}