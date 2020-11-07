require("dotenv").config();
const express = require("express")
const bodyParser= require("body-parser")
const ejs = require("ejs");
const mongoose = require("mongoose")
const app = express()



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// mongoDB connection
// "mongodb://localhost:27017/personDB"
mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connected succesfully");
})
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);





// Routes
 
require("./Routes/web.js")(app)




app.listen(process.env.PORT||3000,function(req,res){
    console.log("Server is running");
})