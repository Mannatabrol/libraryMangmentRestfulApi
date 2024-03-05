// Import mongoose module
const mongoose = require("mongoose");


 
mongoose.connect("mongodb+srv://mannatabrol28:mannat080abrol@cluster0.jiiyri1.mongodb.net/library-managment?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});
