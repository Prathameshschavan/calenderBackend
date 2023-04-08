const express = require("express");
const connection = require("./config/db");
const enroll = require("./route/route");
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(cors())
app.use("/",enroll)



app.listen(8000, ()=>{
    connection();
    console.log("listening on port 8000")
})