//PART 1---------------------------------------------------------------------------------------------- 
//importing database.js to connect with MongoDB
const connectDatabase = require('./config/database');


// PART 2 --------------------------------------------------------------------------------------------
//importing express to create server 
const express = require('express');

const cors = require('cors');

const dotenv = require("dotenv")

dotenv.config({path:"backend/config/config.env"});

//creating app variable function.
const app = express();
const PORT = process.env.PORT;

// calling function inside of database.js
connectDatabase();

// starting server
app.listen(PORT, () => {
    console.log("Example app is listening at http://localhost:5000");
    console.log(process.env.DB_URI);
    console.log(PORT);
    
})


app.use(cors())
// middle ware to get req body data
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Rohit is on fire....!");
})

// ----------------------------------------------------------------------------------------------------
// Availble 2 routes 
const notesroutes = require('./routes/notes');
const authentication = require('./routes/auth');

//redirecting to routes
app.use('/api/notes', notesroutes);
app.use('/api/auth', authentication);