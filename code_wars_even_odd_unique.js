let testOne = [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

let testTwo = [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers){
//   let odd = []
//   let even = []
//   let findMe = 0
 
//   for(let i = 0; i < integers.length; i++){
//     if(integers[i] % 2 === 0){
//       even.push(integers[i])
//     } else odd.push(integers[i])
//   }
  
//   if(odd.length === 1){
//     return odd[0]
//   }else return even[0]
// }

//refactor time! TERNARY 
function findOutlier(integers){
  let odd = []
  let even = []
  let finalAnswer = 0 
 
  for(let i = 0; i < integers.length; i++){
  (integers[i] % 2 === 0) ? even.push(integers[i]): odd.push(integers[i])
  }
  
  (odd.length === 1) ? finalAnswer = odd[0]: finalAnswer = even[0]
  return finalAnswer
}


console.log(findOutlier(testOne))
console.log(findOutlier(testTwo))

// (integers[i] % 2 === 0) ? even+=1 : odd+=1
