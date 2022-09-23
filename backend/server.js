const express = require('express');
//const bodyParser = require('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
// mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true});

// const connection = mongoose.connection;
// connection.once('open',() => {
//     console.log("mongo db connection established");
// })



mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises',exerciseRouter); 
app.use('/users', userRouter)  ;

// app.use(app.router);
// exerciseRouter.initialize(app);
// userRouter.initialize(app);

app.listen(port, () => {
    console.log(`sever is running ${port}`)
}); 