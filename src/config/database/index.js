const mongoose = require("mongoose")

async function connect (){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/coffee-shop")
        console.log("connect to database successful");
    }
    catch{
        console.log("connect to database failed");
    }
}


module.exports = {connect}