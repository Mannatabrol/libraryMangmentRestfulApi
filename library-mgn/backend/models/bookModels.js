const mongoose =require("mongoose");
const bookSchema = new mongoose.Schema({
    name:{type:String, require:true},
    description :{type:String, require:true},
    author:{type:String, require:true},
    bookname:{type:String, require:true},
    image:{type:String, require:true},
    price:{type:String, require:true},
});
module.exports = mongoose.model("books", bookSchema);

