require('dotenv').config()
const express=require('express');
const bodyParser=require('body-parser');
const server=express();
const port=8080
server.use(bodyParser.json())
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
server.use('/api',productRouter.Router)
server.use('/userapi',userRouter.Router)

//get all data
console.log(process.env.DB_Password)


server.listen(port,()=>{
    console.log(`server started this ${port}`)
})