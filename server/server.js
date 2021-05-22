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

app.post('/history', (req, res) => {
    console.log('Received from user input', req.body);

    let numberOne = req.body.firstNumber;

    let numberTwo = req.body.secondNumber;

    let operator = req.body.operator;

    let result = 0;

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
            console.log('Pick an operator ya twit')
    }

    let switchMath = {
        switchFirstNum: numberOne, 
        switchOperator: operator, 
        switchSecondNum:numberTwo, 
        switchResult: result}

        console.log('The numbers pulled from switch statement are', switchMath)

        inputHistory.push(switchMath);

        res.sendStatus(200);
})

// module.exports =  function additionInput (){
//     console.log('Addition button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let sum = newData.inputOne + newData.inputTwo
//    console.log('The sum is',sum)
//    return sum;
// }

//listener for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});