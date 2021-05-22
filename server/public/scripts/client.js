console.log('JS Loaded');//Test JS Load

$(handleReady);//Run JQ on load

// let calculator = {
//     '+': function (x, y) {console.log(calculator); return x + y;},
//     '-': function (x, y) { return x - y },
//     '*': function (x, y) { return x * y },
//     '/': function (x, y) { return x / y },
// }
// calculator ['+'](1, 2) == 3;
let operator = '';

function handleReady(){//JQ loaded Test
    console.log('JQ Loaded')

    //click listeners
    //$('#add').on('click', calculator ['+'] ($('#inputOne').val(), $('#inputTwo').val()))
    //  $('#subtract').on('click', subtractInput)
    //  $('#multiply').on('click', multiplyInput)
    //  $('#divide').on('click', divideInput)
    
    //This adds all user inputs
    $('#equals').on('click', addInputs);

    $('.inputThree').on('click', function(){
        operator = $(this).html();
        console.log('The operator selected was ', operator);
        $(this).addClass('colorPurple');
    })

}

function addInputs(){
    console.log('Equals button clicked');
    let newInputs ={
        firstNumber: $('#inputOne').val(),
        secondNumber: $('#inputTwo').val(),
        operator: operator
    }

    console.log(newInputs);

    $.ajax({
        method: 'POST',
        url: '/history',
        data: newInputs
    }).then(response => {
        console.log('The users input was', response)
    });
}

// function additionInput (){
//     console.log('Addition button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let sum = newData.inputOne + newData.inputTwo
//    console.log('The sum is',sum);
// //    $('.history').append(`<ul>${sum}</ul>`)
//    return sum;
// }

// function subtractInput (){
//     console.log('Subtraction button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let difference = newData.inputOne - newData.inputTwo
//    console.log('The difference is',difference)
//    return difference;
// }

// function multiplyInput (){
//     console.log('Multiplication button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let product = newData.inputOne * newData.inputTwo
//    console.log('The product is',product)
//    return product;
// }

// function divideInput (){
//     console.log('Division button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let quotient = newData.inputOne / newData.inputTwo
//    console.log('The quotient is',quotient)
//    return quotient;
// }