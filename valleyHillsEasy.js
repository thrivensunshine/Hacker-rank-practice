// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
//
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
//
// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.
//
// Function Description
//
// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
//
// countingValleys has the following parameter(s):
//
// n: the number of steps Gary takes
// s: a string describing his path
// Input Format
//
// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.
//
// Constraints
//
// Output Format
//
// Print a single integer that denotes the number of valleys Gary walked through during his hike.
//
// Sample Input
//
// 8
// UDDDUDUU
// Sample Output
//
// 1
// Explanation
//
// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:
//
// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.

const nu = 8
const st = 'UDDDUDUU'

function countingValleys(n, s) {
  console.log(n, s)
  //this will be a long way to do it but I can get it to work
  let myArr = []
  let ans = 0
  let fin = 0

  //im going to loop through string and push the incremental value to my array
  for(let i = 0; i < s.length; i++){
    if(s[i]=== 'U'){
      //going up hill
      myArr.push(ans += 1)
    }
     else if(s[i] === 'D'){
       //going down hill
       myArr.push(ans -= 1)
    }
  }

//now i will loop through my new array and if the index is 0 (sea level) AND the index before is a negative number it will indicate a valley thus adding the number of valleys travered
  for (let j = 0; j < myArr.length; j++){
    if(myArr[j] < 0 && myArr[j+1]===0){
      fin+= 1
    }
  }
  return fin
}

countingValleys(nu, st)
