const mongoose=require('mongoose');
const collection = require('../Config/collection');
require('../Config/db');

const CategorySchema=new mongoose.Schema({
    name:{typeof:String,require:[true,"Name is require"]},
    slug:{typeof:String},
    category_id:{typeof:String}
},{
    timestamps:true
})

const CategoryModule=mongoose.model(collection.Category,CategorySchema)

module.exports=CategoryModule