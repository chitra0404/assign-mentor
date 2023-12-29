const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const menterouter=require('./routes/mentor');
const studentrouter=require('./routes/student');

const app=express();
const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1/mentordb")
.then(()=>console.log("connectted to mongodb"))
.catch((err)=>console.log("error ocured",err));



app.use('/mentor',menterouter);
app.use('/student',studentrouter);

const port=8080;
app.listen(port,()=>console.log("listening to the port "));
