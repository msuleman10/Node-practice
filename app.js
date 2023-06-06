const express = require("express");
const mongoose = require("mongoose")
const User = require("./models/user")
const app = express();
//data_base
const dbURI = "mongodb+srv://suleman:suleman123@cluster0.1s993xb.mongodb.net/test_database?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) =>app.listen(8000))
    .catch((err)=>console.log(err , "database not connectd"));

app.set('view engine' , 'ejs');

app.use(express.static("./Css"));
app.use(express.static("./images"));
app.use(express.urlencoded({extended : true}));


app.get("/" , (req , res)=>{
    res.render("index");
})

app.get("/about" , (req , res)=>{
    res.redirect("/user");
})

app.get("/user" , (req , res) =>{
    User.find().then((result) => res.render("about" , {user : result})).catch((err) => console.log(err));
})

app.get("/user/user-form" , (req , res) => {
    res.render("userForm");
    res.end();
})
app.post("/user" , (req , res) => {
    const userInformation = new User(req.body);
    userInformation.save().then((result) => res.redirect("/user")).catch((err) => console.log(err))
})

app.get("/contect-us" , (req , res)=>{
    res.render("contect");
})

app.get("/about-us" , (req , res)=>{
    res.redirect("/about" );
})

app.use((req , res)=>{
    res.status(404).render("404");
})