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


app.get("/" , (req , res)=>{
    res.render("index");
})

// mongo_db routing
app.get("/abc" , (req , res) => {
    const allData = async () => {
        try {
            const userData1 = new User({
                user_name : "Suleman",
                user_age : 18,
                user_job : "Computer science"
            })
            const userData2 = new User({
                user_name : "majid",
                user_age : 22,
                user_job : "Computer science"
            })
            const userData3 = new User({
                user_name : "abdul rehman",
                user_age : 28,
                user_job : "game develpor"
            })
            const userData4 = new User({
                user_name : "wassem",
                user_age : 33,
                user_job : "Computer science"
            })
            const result = await User.insertMany([userData1 , userData2 , userData3 , userData4]);
            res.send(result);
            res.end()
        } catch (error) {
            console.log(error)
        }   
    }
    allData()
});

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