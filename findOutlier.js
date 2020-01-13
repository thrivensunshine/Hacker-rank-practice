// let testOne = [2, 4, 0, 100, 4, 11, 2602, 36]
// // Should return: 11 (the only odd number)

// let testTwo = [160, 3, 1719, 19, 11, 13, -21]
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
// function findOutlier(integers){
//   let odd = []
//   let even = []
//   let finalAnswer = 0 
 
//   for(let i = 0; i < integers.length; i++){
//   (integers[i] % 2 === 0) ? even.push(integers[i]): odd.push(integers[i])
//   }
  
//   (odd.length === 1) ? finalAnswer = odd[0]: finalAnswer = even[0]
//   return finalAnswer
// }


// console.log(findOutlier(testOne))
// console.log(findOutlier(testTwo))

// (integers[i] % 2 === 0) ? even+=1 : odd+=1

let testOneAgain = "is2 Thi1s T4est 3a" 
//  -->  "Thi1s is2 3a T4est"
let testTwoAgain = "4of Fo1r pe6ople g3ood th5e the2"
  // -->  "Fo1r the2 g3ood 4of th5e pe6ople"
let testThreeAgain = "" 
//  -->  ""

function order(words){
  let arrayPlease = words.split('')
  let arrToSort = words.split(' ')
  let inceptionArray = []
  let arrayWork = new Array(arrToSort.length)
  
  for(let i = 0; i < arrayPlease.length; i++){
  
    if(Number(arrayPlease[i])){
      let toNum = Number(arrayPlease[i])
      inceptionArray.push(toNum - 1)
    }
    
    //console.log(arrToSort[i])
  }
    //  console.log(inceptionArray)
  for(let j = 0; j <= arrToSort.length; j++){
    console.log( inceptionArray[j])
    console.log(arrToSort[j])
    arrayWork.splice(inceptionArray[j], 1, arrToSort[j])
  

  }
  // arrayWork.shift()

  return arrayWork.join(" ")
}

console.log(order(testTwoAgain))
