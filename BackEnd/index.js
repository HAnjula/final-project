const express=require('express');
const mongoose=require('mongoose')
const cors=require("cors");
require('dotenv').config();



const bodyParser = require('body-parser')


const UserRoute = require('./routes/UserRoute');
const ItemRoute = require('./routes/ItemRoute');
const OrderRoute = require('./routes/OrderRoute');


const port=process.env.SERVER_PORT;
const app=express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Bloomingdale',()=>{
    app.listen(port,()=>{
    console.log(`Api running on port : ${port}`);
})
})

app.use('/api/v1/user',UserRoute);
app.use('/api/v1/item',ItemRoute);
app.use('/api/v1/order',OrderRoute);


