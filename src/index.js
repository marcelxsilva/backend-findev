const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
// connection from database
mongoose.connect(
    'mongodb+srv://dev:<dev>@cluster0-z8na2.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(express.json());
app.use(routes);

app.listen(3333);