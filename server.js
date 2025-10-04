const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const DBListener = require('./Config/dbconnection');
const BooksRoute = require('./Routes/books');  

DBListener.on('error',(err)=>{console.log(err);});

DBListener.once('open',()=>{
    
console.log("Connected to MongoDB");

//Routes
app.use('/books', BooksRoute);

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    });