require('dotenv').config()
const mongoose=require('mongoose')


mongoose.connect(`${process.env.DB_URL}`).then((db)=>{
    console.log('db is connected')
}).catch(error=>{
    console.log(error)
})

