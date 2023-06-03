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
// const blog = [
//     {title : 'this is best not but ggod 100' , text : "also iam good yes 100"},
//     {title : 'this is best not but ggod 200' , text : "also iam good yes 200"},
//     {title : 'this is best not but ggod 300' , text : "also iam good yes 300"}
// ];

app.use(express.static("./Css"));
app.use(express.static("./images"));

// app.get("/" , (req , res)=>{
//     res.render("index" , {blogs : blog});
// })
app.get("/" , (req , res)=>{
    res.render("index");
})

//mongo_db routing
// app.get("/abc" , (req , res) => {
//     const user2 = new User({
//         user_name : "Suleman",
//         user_age : 18,
//         user_job : "Computer science"
//     })
//     user2.save()
//         .then((result) => res.send(result))
//         .catch((err)=> console.log(err))
// });

app.get("/about" , (req , res)=>{
    res.redirect("/user");
})

app.get("/user" , (req , res) =>{
    User.find().then((result) => res.render("about" , {user : result})).catch((err) => console.log(err));
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