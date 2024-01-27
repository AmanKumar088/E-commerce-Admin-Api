require('../Config/db');
const mongoose=require('mongoose');
const collection = require('../Config/collection');


const CategorySchema=new mongoose.Schema({
    name:{type:String,required:[true,"Name is require"],unique:true},
    title:{type:String},
    category_name:{type:String}
},{
    timestamps:true
})

const CategoryModule=mongoose.model(collection.Category,CategorySchema)

module.exports=CategoryModule

