        

let testIt = [ [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ] ]
  //output should be 19

let testItTwo = [ 
[ 3, 7, -3, 0, 1, 8],
[1, -4, -7, -8, -6, 5],
[-8, 1, 3, 3, 5, 7],
[-2, 4, 3, 1, 2, 7],
[2, 4, -5, 1, 8, 4],
[5, -7, 6, 5, 2, 8]]
//output should be 33


function hourglassSum(arr) {

  let addIt = 0
  let holdIt = []
  let answerIt = 0

  // loop through and get each array index up to the 4th (becuase past the fourth row will not have a complete hour glass ) 
  for(let i = 0; i < 4; i++){
    // console.log(arr[i] + "  roooows (i)")

    //loop through through the first layer to get the index of each array index. Again only up to four because past that wont give you a full hourglass
    for(let j = 0; j < 4; j++){
      // console.log(arr[i][j]+ "  coolumns (j)")

      //add each number at the hour glass postions 3 in the first row one in the second(arr[i+1]) and three in third(arr[i+2].
      addIt = arr[i][j] +  arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
               
      //push the new variable into our holding array 
      holdIt.push(addIt)
    
    }
  }
  //sort the array from smallest to largest and take the end index and assign to variable
  answerIt = holdIt.sort((a,b)=> a-b).pop()

  //return the answer
  return answerIt

}


//console.log(hourglassSum(testIt))
console.log(hourglassSum(testItTwo))



// below was one of my first attempts I tried to flatten then array but I didt constrain to hourglass shape and failed one of the tests

//~~~~~~~~~~~~~~ the below one works for all but one. fak~~~~~~~~~~~~~~~
// function hourglassSum(arr) {
//   let addIt = 0
//   let holdIt = []
//   let addItArr = []
//   let answerIt = 0

//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j <= arr.length; j++){
//       // console.log(arr[i][j] + " " + i)
//       if(arr[i][j] || arr[i][j]=== 0){
//       holdIt.push(arr[i][j])}
//     }
//   }
//   for(let k = 0; k <= 21; k++){
//     addIt = (holdIt[k] + holdIt[k+1] + holdIt[k+2] + holdIt[k+7] + holdIt[k+12] + holdIt[k+13] + holdIt[k+14])
//     addItArr.push(addIt)
//   }
//   console.log( addItArr)
//  return addItArr.sort((a,b)=>a-b).pop()
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
