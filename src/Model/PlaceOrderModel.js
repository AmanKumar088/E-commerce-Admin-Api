require('../Config/db')
const { ObjectId } = require('mongodb')
const collection=require('../Config/collection')
const mongoose=require('mongoose')

const PlaceOrderSchema=new mongoose.Schema({
    customer:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:"Customer", 
        required: true 
      },
      products: {
        product_id:ObjectId
      },
      address:{
        address:{type:String},
        pincode:{type:Number}
      },
      total:{ 
        type: Number, 
        required: true 
      },
      status: {
        type: String, 
        enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"], 
        default: "Pending"
      },
      date: { 
        type: Date, 
        default: Date.now
    }
},{
    timestamps:true
})

const PlaceOrderModel=mongoose.model(collection.placeOrder,PlaceOrderSchema)

module.exports=PlaceOrderModel
