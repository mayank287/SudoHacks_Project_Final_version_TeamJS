const app =  require("./app")
const mongoose = require("mongoose");



// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  
  process.exit(1);
});




//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
 }



// DB config
const db = require('./config/keys').mongoURI;
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config.env" });
 }

// connect to MongoDB;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//Init Middleware 



if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env " });
 }




 const server = app.listen(process.env.PORT || 4000, () => {
 
});

