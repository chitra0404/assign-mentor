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

app.get('/',(req,res) => res.send(`
<div>
<p> In Home Page </p>
<p>To get all mentor List - https://zen-assign-mentors.herokuapp.com/Mentors </p>
<br>
<p>To get all Students List - https://zen-assign-mentors.herokuapp.com/Students </p>
<br>
<p>To get mentor based on ID - https://zen-assign-mentors.herokuapp.com/Mentors/get-mentor/:id<p>
<p>sample - https://zen-assign-mentors.herokuapp.com/Mentors/get-mentor/60e7f515d5ff5342a06652e3 </p>

<p> To test Post and update - visit Frontend page of the application - https://preethi-st.github.io/ZEN-Mentors-Frontend/ </p>
</div>
`))

app.use('/mentor',menterouter);
app.use('/student',studentrouter);

const port=8080;
app.listen(port,()=>console.log("listening to the port "));
