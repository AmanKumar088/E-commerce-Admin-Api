const ProductModel = require("../Model/ProductModel");

exports.AddProduct = async (request, response) => {
    try {
        const bodyData = request.body;
        const image = request.imagePath
        const AddData = {
            brand_name: bodyData.brand_name,
            model_number: bodyData.model_number,
            operation_version: bodyData.operation_version,
            cellular_technology: bodyData.cellular_technology,
            product_img: image,
            product_price: bodyData.product_price,
            product_color: bodyData.product_color,
            operation_version: bodyData.operation_version,
            product_highlight: bodyData.product_highlight,
            product_description: bodyData.product_description,
            product_rating: bodyData.product_rating,
            sub_category_name: bodyData.sub_category_name,
            product_quantity:bodyData.product_quantity,
            product_name: bodyData.product_name
        }
        
        const res = await ProductModel.create(AddData)
        console.log(image)
        if (res) {
            response.json({
                status: "success",
                message: "add product successfully",
                data: res
            })
        }
    } catch (error){
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}


exports.SingleProduct = async (request, response) => {
    try {
        const id = request.params.id;
        const res = await ProductModel.findOne({ _id: id })
        res.product_img = `http://localhost:200/uploadImages/${res.product_img}`
        if (res) {
            response.json({
                status: "success",
                message: "single product show successfully",
                data: res
            })
        }

    } catch (error) {
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}


exports.UpdateProduct = async (request, response) => {
    try {
        const id = request.params.id;
        const bodyData = request.body
        const query = {
            brand_name: bodyData.brand_name,
            model_number: bodyData.model_number,
            operation_version: bodyData.operation_version,
            cellular_technology: bodyData.cellular_technology,
            product_img: image,
            product_price: bodyData.product_price,
            product_color: bodyData.product_color,
            operation_version: bodyData.operation_version,
            product_highlight: bodyData.product_highlight,
            product_description: bodyData.product_description,
            product_rating: bodyData.product_rating,
            sub_category_name: bodyData.sub_category_name,
            product_name: bodyData.product_name
        }
        const res = await ProductModel.updateOne({ _id: id }, query)
        if (res) {
            response.json({
                status: "success",
                message: "update product successfully",
                data: res
            })
        }
    } catch (error) {
        response.json({
            status: "failed",
            message: "ivailed",
            error: error
        })
    }
}


exports.DeleteProduct = async (request, response) => {
    try {
        const id = request.params.id
        const res = await ProductModel.deleteOne({ _id: id })
        if (res) {
            response.json({
                status: "success",
                message: "Delete successfully",
                data: res
            })
        }
    } catch (error) {
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}

exports.GetAllProduct = async (request, response) => {
    try {
        let res = await ProductModel.find();
        res= res.map((value)=>{value.product_img=`http://localhost:200/uploadImages/${value.product_img}`
        return value
    })
        if (res){
            response.json({
                status: "success",
                message: "GetAllProduct Successfully",
                data: res
            })
        }
    } catch (error) {
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}



exports.TemplateImage = async (request, response) => {
    try {
        let res = await ProductModel.find();
        res= res.map((value)=>{value.product_img=`http://localhost:200/uploadImages/${value.product_img}`
        return value
    })

    response.render('ViewTemplate',{product:res})
       
    } catch (error) {
        response.json({
            status: "failed",
            message: "invailed",
            error: error
        })
    }
}