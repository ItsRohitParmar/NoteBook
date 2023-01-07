const mongoose = require("mongoose");

const connectDatabase =()=>{
    mongoose
    .connect("mongodb+srv://Developer:Developer@cluster0.yihm9na.mongodb.net/iNoteBook?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase