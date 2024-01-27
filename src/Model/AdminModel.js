const mongoose=require('mongoose')
const collection = require('../Config/collection')
const { encoded } = require('../Utils/Utils')
require('../Config/db')


const AdminSchema=new mongoose.Schema({
    name:{type:String,required:[true,"Name is require"]},
    email:{type:String,required:[true,"Email is require"],unique:true},
    phone:Number,
    password:String
},{
    timestamps:true
})

AdminSchema.pre('save',function(){
    this.password=encoded(this.password)
})

const AdminModule= mongoose.model(collection.Admin,AdminSchema)

module.exports=AdminModule
