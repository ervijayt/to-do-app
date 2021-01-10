const router = require("express").Router();
const mongoose = require('mongoose');
const todoData = require("../models/Todo");

router.post("/save",  async (req, res) =>{
    //Retrive data
    console.log("req.body",req.body)
    var {todo, bucketList, idCounter} = req.body;
    let model;
    try {
        model = mongoose.model('todoData');
    } catch (error) {
        model = mongoose.model('todoData', todoData, 'todoData');
    }
    console.log("step-2",{todo, bucketList, idCounter})
    try {
        var x= await model.updateOne({'_id':"5f7d74510e90cf24a0d5032f"},
                {$set: {todo, bucketList, idCounter}}, {upsert : true});
        return res.send(x);
    } catch (err) {
        console.log('err=', err);
    }
});

router.post("/get", async(req, res)=>{
    let returnValue = await todoData.find({"_id": "5f7d74510e90cf24a0d5032f" });
    res.send(returnValue)
});


module.exports = router;