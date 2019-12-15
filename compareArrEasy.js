


let alice = [17, 28, 30]

let bob = [99, 16, 8]

function compareTriplets(a, b) {
  //make a new array to hold the points
  let ans = [0,0]
  //[alice, bob]

  //loop through both arrays and compare each index
  for(let i = 0; i < a.length; i++){

    //add a point accordingly
    if(a[i] > b[i]){
      ans[0] += 1
    }
    if(a[i] < b[i]){
      ans[1] += 1
    }
  }
  //return the array
  return ans
}

compareTriplets(alice, bob)
