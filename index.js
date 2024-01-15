// const http=require('http');
// const app=require('./app');
require('dotenv').config();


const Host=process.env.HOST
const Port=process.env.PORT

// const server=http.createServer(app)

const server=require('./app')


server.listen(Port,()=>{
    console.log(`server started http://${Host}:${Port}`)
})
