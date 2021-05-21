console.log('JS Loaded');//Test JS Load

$(handleReady);//Run JQ on load

function handleReady(){//JQ loaded Test
    console.log('JQ Loaded')

    //click listeners
     $('#add').on('click', additionInput)
}

function getAddition(){
    $.ajax({
        method: 'GET',
        url: ''
    })
}

// function additionInput (){
//     console.log('Addition button clicked')

//     let newData = {
//         inputOne: Number($('#inputOne').val()),//Pulling from input one
//         inputTwo: Number($('#inputTwo').val()),//pulling from input two
//     }
//    let sum = newData.inputOne + newData.inputTwo
//    console.log('The sum is',sum)
//    return sum;
// }