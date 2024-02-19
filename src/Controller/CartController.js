const { ObjectId } = require("mongodb");
const CartModel = require("../Model/CartModel");
exports.AddCartController = async (request, response) => {
    try {
        const body = request.body;
        const productData = {
            user_id: body.user_id,
            product_id: body.product_id,
            product_quantity: body.product_quantity
        }
        // console.log(productData)

        const dataFind = await CartModel.findOne({ $and: [{ user_id: productData.user_id }, { product_id: productData.product_id }] })
     
        if (dataFind) {
            console.log(dataFind.product_quantity)
            const updateone = await CartModel.updateOne({ _id: dataFind._id },{product_quantity:productData.product_quantity})
            response.json({
                status: "success",
                message: "update successfully",
                data: updateone
            })
        }
        else {
            const tt = await CartModel.create(productData)
            response.json({
                status: "success",
                message: "addCart successfully",
                data:tt
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



exports.DeleteCart = async (request, response) => {
    try {
        const id = request.params.id;
        const ee = await CartModel.deleteOne({ _id:new ObjectId(id) })
        if(ee){
            response.json({
                status: "success",
                message: "delete cart successfully",
                data: ee
            })
        }
    }catch (error){
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}

exports.CartJoinController = async (request, response) => {

    try {
        const res = await CartModel.aggregate([{ $match: { user_id: new ObjectId(request.id) } },
        {
            $lookup: {
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "cartDetails"
            }
        }, { $project: { user_id: 0, _id: 0 } }
        ])

        if (res) {
            response.json({
                status: "success",
                message: "cart join successfully",
                data: res
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