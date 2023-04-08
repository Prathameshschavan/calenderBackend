const mongoose = require('mongoose');

mongoose.set("strictQuery",false);

const connection = async ()=>{
     await mongoose.connect(`mongodb+srv://cprathamesh94:cprathamesh94@cluster0.iqtqm3j.mongodb.net/myFirstDatabase?appName=mongosh+1.7.1`);
     console.log("Connected to DataBase");
}

module.exports=connection; 