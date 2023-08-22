const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./routes/route')
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(3001, ()=>{
    console.log("Port is running on 3001");
})