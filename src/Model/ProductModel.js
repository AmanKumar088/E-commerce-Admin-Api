require('../Config/db')
const mongoose=require('mongoose');
const collection = require('../Config/collection');


const ProductSchema=new mongoose.Schema({
    brand_name:{type:String,required:[true,"Name is require"]},
    model_number:String,
    operation_version:String,
    cellular_technology:String,
    product_price:String,
    product_color:String,
    product_highlight:String,
    product_description:String,
    product_rating:String,
    category_name:String,
    sub_category_name:String,
    product_name:String,
    product_quantity:Number,
    product_img:String
},{
    timestamps:true
})

const ProductModel=mongoose.model(collection.Product,ProductSchema)

module.exports=ProductModel

