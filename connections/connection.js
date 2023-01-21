const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Refer_&_Earn", {
    useNewUrlParser: true,
    // useFindAndModify: true,
    useUnifiedTopology: true
}).then(console.log("connection established with ReferEarn DATABASE")).catch((e) => console.log("bhaii error aagya  /n " + e))

