require('dotenv').config({
    path: '../.env',
    override: true,
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const http = require("http").createServer(app);



app.set('port', process.env.EXPRESS_PORT);
app.use(cors());
app.use(express.json());
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/auth', require('./routes/auth'));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('*', express.static(path.join(__dirname, '../dist')));

mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE_HOST}`, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(err));

http.listen(app.get('port'), () => {
    console.log('Server is running');
});











