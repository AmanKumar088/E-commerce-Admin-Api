const mongoose=require('mongoose');
const collection=require('../Config/collection');
require('../Config/db');


const SubCategorySchema=new mongoose.Schema({
    category_name:{type:String},
    sub_category_name:{type:String}
})
const SubCategoryModule=mongoose.model(collection.SubCategory,SubCategorySchema)

module.exports=SubCategoryModule