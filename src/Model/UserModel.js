const mongoose=require('mongoose')
const collection = require('../Config/collection')
const { encoded } = require('../Utils/Utils')
require('../Config/db')


const UserSchema=new mongoose.Schema({
    name:{type:String,required:[true,"Name is require"]},
    email:{type:String,required:[true,"Email is require"],unique:true},
    phone:Number,
    password:String
},{
    timestamps:true
})

UserSchema.pre('save',function(){
    this.password=encoded(this.password)
})

const UserModel= mongoose.model(collection.User,UserSchema)

module.exports=UserModel
