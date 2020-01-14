let aA = ["1,2,3,4,5"]
let dD = 4

//5 1 2 3 4




//this works if a is a number and not an array

// function rotLeft(a, d) {
//   let holdIt = []
//   let moveIt = 0

//   for(let i = 1; i <= a; i++){
//     holdIt.push(i)
//   }
  
//   for(let j = 1; j <= d; j++){
//     moveIt = holdIt.shift()
//     holdIt.push(moveIt)
//   }

//   return holdIt
// }


function rotLeft(a, d) {
  let holdIt = []
  let moveIt = 0

  for(let i = 1; i <= a; i++){
    holdIt.push(i)
  }
  
  for(let j = 1; j <= d; j++){
    moveIt = holdIt.shift()
    holdIt.push(moveIt)
  }

  return holdIt
}





rotLeft(aA, dD)
