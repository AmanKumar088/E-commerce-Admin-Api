require('../Config/db')
const mongoose=require('mongoose');
const collection = require('../Config/collection');


const ProductSchema=new mongoose.Schema({
    brand_name:{type:String,required:[true,"Name is require"],unique:true},
    model_number:String,
    operation_version:String,
    cellular_technology:String,
    product_price:{type:String},
    product_color:{type:String},
    product_highlight:{type:String},
    product_description:{type:String},
    product_rating:{type:String},
    sub_category_name:{type:String},
    product_name:{type:String},
    product_img:{type:String}
},{
    timestamps:true
})

const ProductModel=mongoose.model(collection.Product,ProductSchema)

module.exports=ProductModel

