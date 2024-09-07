const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path:path.join(__dirname,'config','config.env')});

const chat = require('./routes/chatRoute');

app.use(express.json());

app.use('/api/v1/',chat);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})