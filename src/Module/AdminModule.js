const mongoose=require('mongoose')
const collection = require('../Config/collection')
const { encoded } = require('../Utils/Utils')
require('../Config/db')


const AdminSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
})

AdminSchema.pre('save',function(){
    this.password=encoded(this.password)
})

const AdminModule= mongoose.model(collection.Admin,AdminSchema)

module.exports=AdminModule
