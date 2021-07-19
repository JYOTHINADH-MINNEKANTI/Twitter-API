//IMPORTING EXPRESS
const express = require('express');

const app = express();

//IMPORTING MONGOOSE

const mongoose = require('mongoose');

require('dotenv/config');

//MIDDLEWARES

app.use(cors())

//IMPORT ROUTES


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


//ROUTES

app.get('/', (req,res) => {
    res.send('Hello Welcome to twitter API.');
})


//CONNECTING TO MONGODB

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('DB connected');
})

//START LISTENING TO SERVER
app.listen(3000, ()=>{console.log('Listening to port 3000')})