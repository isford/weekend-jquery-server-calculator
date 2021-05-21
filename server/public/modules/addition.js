module.exports =  function additionInput (){
    console.log('Addition button clicked')

    let newData = {
        inputOne: Number($('#inputOne').val()),//Pulling from input one
        inputTwo: Number($('#inputTwo').val()),//pulling from input two
    }
   let sum = newData.inputOne + newData.inputTwo
   console.log('The sum is',sum)
   return sum;
}