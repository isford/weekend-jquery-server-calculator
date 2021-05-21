const express = require('express');//requires express install
const bodyParser = require('body-parser');//allows us to use postman
//const { watch } = require('fs'); not sure where this came from

//make a server called app
const app = express();
const PORT = 5000;

//So when I go to to localhost:5000 it will be static
app.use(express.static('server/public'));
//body parser for postman
app.use(bodyParser.urlencoded({extended : true}))

let inputHistory = [];

app.post('/addition', (req, res) =>{
    console.log(req.body);
    inputHistory.push(req.body)

    res.sendStatus(201);
})


//listener for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});