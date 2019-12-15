let test = [[11,2,4],[4,5,6],[10,8,12]]

function diagonalDifference(arr){
  //two variables to hold each diagonal sum
  let diagOne = 0
  let diagTwo = 0
  
  for(let i = 0; i < arr.length; i++){
  //this will traverse array and move one index in the first array, then second index of the second array and so on
    dianOne += arr[i][i]  
  }
  
  //reverse the array and do the process again to get the opposite diagonal sum 
  let arrReverse = arr.reverse()
  for(let j = 0; j < arr.length; j++){
    diagTwo += arrReverse[i][i]
  }
  
  //return the absolute value of the difference 
  
  return Math.abs(diagOne - diagTwo) 

}

diagnoalDIfference(test)
