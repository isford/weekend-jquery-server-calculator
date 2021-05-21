console.log('JS Loaded');//Test JS Load

$(handleReady);//Run JQ on load

function handleReady(){//JQ loaded Test
    console.log('JQ Loaded')

    //click listeners
     $('#add').on('click', additionInput)
     $('#subtract').on('click', subtractInput)
     $('#multiply').on('click', multiplyInput)
     $('#divide').on('click', divideInput)
}

function additionInput (){
    console.log('Addition button clicked')

    let newData = {
        inputOne: Number($('#inputOne').val()),//Pulling from input one
        inputTwo: Number($('#inputTwo').val()),//pulling from input two
    }
   let sum = newData.inputOne + newData.inputTwo
   console.log('The sum is',sum)
   return sum;
}

function subtractInput (){
    console.log('Subtraction button clicked')

    let newData = {
        inputOne: Number($('#inputOne').val()),//Pulling from input one
        inputTwo: Number($('#inputTwo').val()),//pulling from input two
    }
   let difference = newData.inputOne - newData.inputTwo
   console.log('The difference is',difference)
   return difference;
}

function multiplyInput (){
    console.log('Multiplication button clicked')

    let newData = {
        inputOne: Number($('#inputOne').val()),//Pulling from input one
        inputTwo: Number($('#inputTwo').val()),//pulling from input two
    }
   let product = newData.inputOne * newData.inputTwo
   console.log('The product is',product)
   return product;
}

function divideInput (){
    console.log('Division button clicked')

    let newData = {
        inputOne: Number($('#inputOne').val()),//Pulling from input one
        inputTwo: Number($('#inputTwo').val()),//pulling from input two
    }
   let quotient = newData.inputOne / newData.inputTwo
   console.log('The quotient is',quotient)
   return quotient;
}