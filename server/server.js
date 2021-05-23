const express = require('express');//requires express install
const bodyParser = require('body-parser');//allows us to use postman


//make a server called app
const app = express();
const PORT = 5000;

//So when I go to to localhost:5000 it will be static
app.use(express.static('server/public'));
//body parser for postman
app.use(bodyParser.urlencoded({extended : true}))
//Empty array to push user input history
let inputHistory = [];
//user input put into a new object
app.post('/history', (req, res) => {
    console.log('Received from user input', req.body);

    let numberOne = req.body.firstNumber;

    let numberTwo = req.body.secondNumber;

    let operator = req.body.operator;

    let result = 0;
    //switch statement to perform correct operation
    switch(operator){
        case '+':
           result = Number(numberOne) + Number(numberTwo)
           console.log('The sum is', result)
           break;
        case '-':
            result = Number(numberOne) - Number(numberTwo)
           console.log('The difference is', result)
           break;
        case '*':
            result = Number(numberOne) * Number(numberTwo)
           console.log('The product is', result)
           break;
        case '/':
            result = Number(numberOne) / Number(numberTwo)
           console.log('The quotient is', result)
           break;
        default:
            console.log('Pick an operator')
    }
    //new object to push into array
    let switchMath = {
        switchFirstNum: numberOne, 
        switchOperator: operator, 
        switchSecondNum:numberTwo, 
        switchResult: result}

        console.log('The numbers pulled from switch statement are', switchMath)

        inputHistory.push(switchMath);

        res.sendStatus(200);
})
//sending array as a response
app.get('/history', (req, res) => {
    console.log('Got to /history');

    res.send(inputHistory)
})

//listener for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});