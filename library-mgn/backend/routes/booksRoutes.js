const router = require("express").Router();
const backModel =require("../models/bookModels");
// post request
router.post("/add", async(req,res) => {
try{

    const data=req.body;
    const newBook =new bookModels(data);
    await newBook.save().then((res) =>{
        res.status(200).json({message: "Book Added Sucessfully"});
    });
}catch(error) {
    console.log(error);
}
});


module.exports =router;
