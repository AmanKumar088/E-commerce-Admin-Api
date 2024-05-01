require('../Config/db')
const { ObjectId } = require('mongodb')
const collection=require('../Config/collection')
const mongoose=require('mongoose')

const PlaceOrderSchema=new mongoose.Schema({
  orderProducts: {
    product_id:ObjectId,
    ref:"OrderProducts",
    required:true
  },
  shippingAddress1:{
    address:{type:String},
    pincode:{type:Number}
  },
  shippingAddress2:{
    address:{type:String},
    pincode:{type:Number}
  },
  city:{
    type:String,
    required:true
  },
  zip:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  status: {
    type: String, 
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"], 
    default: "Pending"
  },
  totalPrice:{
    type: Number
  },
  customer:{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref:"Customer", 
      required: true 
      },
      dateOrder: { 
        type:Date, 
        default:Date.now
    }
},{
    timestamps:true
})

const PlaceOrderModel=mongoose.model(collection.placeOrder,PlaceOrderSchema)

module.exports=PlaceOrderModel
