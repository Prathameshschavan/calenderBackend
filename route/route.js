const express = require('express');
const Data = require('../model/model');
const enrollFun = require('../controller/controller');


let enroll = express.Router();

enroll.post("/", async(req,res)=>{
    try {
         const {hours} = req.body;
         console.log(hours.hours)
         let data = await enrollFun(hours.hours);
          res.send({
            data
          })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



module.exports=enroll;