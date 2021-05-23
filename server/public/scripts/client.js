console.log('JS Loaded');//Test JS Load

$(handleReady);//Run JQ on load

let operator = '';

function handleReady(){//JQ loaded Test
    console.log('JQ Loaded')

    //click event to add inputs to the POST 
    $('#equals').on('click', addInputs);

    //function to select correct operator on click
    $('.inputThree').on('click', function(){
        operator = $(this).html();
        console.log('The operator selected was ', operator);
        $(this).addClass('colorPurple');
    })
    //get function to pull input history from server
    getCalculation();
    //clears inputs on click
    $('#clear').on('click', clearInputs)
    
}
//clears user input on DOM
function clearInputs(){
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('.inputThree').removeClass('colorPurple');
    //getCalculation();
}
//adds user input to POST/Server
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
        getCalculation();
    });
}
//gets solution from server
function getCalculation(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(response => {
        console.log('The input history was', response);

        $('.history').empty();

        

        for (let calculation of response){
            $('#solution').empty().append(`<h3>${calculation.switchResult}</h3>`);
            $('.history').append(`
            <li>
            ${calculation.switchFirstNum} ${calculation.switchOperator} ${calculation.switchSecondNum}
            = ${calculation.switchResult}
            </li>
            `);
        }
    })
}