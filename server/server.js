const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const http = require("http").createServer(app);



app.set('port', '3001');
app.use(cors());
app.use(function(req,res,next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://77.238.225.192:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/auth', require('./routes/auth'));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('*', express.static(path.join(__dirname, '../dist')));

// mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE_HOST}`, { useNewUrlParser: true })
//     .then(() => console.log('Connected to MongoDB!'))
//     .catch((err) => console.log(err));

mongoose.connect(`mongodb://localhost:27017/recipe_book_db`, {
    authSource: "recipe_book_db",
    user: "recipe",
    pass: "recipesecretpassword",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(err));

http.listen(app.get('port'), () => {
    console.log('Server is running');
});
