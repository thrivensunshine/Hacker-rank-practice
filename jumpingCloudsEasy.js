Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
Input Format

The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

Constraints

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4

let test = [0, 0, 1, 0, 0, 1, 0]
let testTwo = [0, 0, 0, 1, 0, 0]
function jumpingOnClouds(c) {
  //variable to hold the answer 
  let ans = 0

  //loop throught the array 
  for(let i = 0; i <= c.length; i++){
    //the first condition will say take the biggest step you can and if its safe and 1 step to my answer 
    if(c[i] === 0 && c[i+1] !== 0 && c[i+2] === 0 ){
      console.log(i,  "FIRST IT", ans, "  <= Ans")
      ans += 1
    }

    //otherwise take one step and add that step to my answer
    else if(c[i] === 0 && c[i+1] === 0 && c[i+2]!== 0){
      console.log(i, "ELSE", ans, "  <= Ans")
      ans += 1
    }
  }
  //this should return the shortest amounts of steps 
  return ans
}
console.log(jumpingOnClouds(test))
console.log(jumpingOnClouds(testTwo))


// ++++++++++ THAT SOLUTION IS WRONG THIS IS CORRECT
let test3 = [0, 0, 0, 1, 0, 0]
// 2, 4, 5
let test4 = [0, 0, 1, 0, 0, 1, 0]
// 1, 3, 4, 6
let test6 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
// 1, 3, 5, 6, 8, 9

function jumpingOnClouds(c) {
    let jumps = 0;
    let cloud = 0;

    while (cloud < c.length - 1) {
        if (c[cloud + 2] !== 1) {
            cloud += 2;
        }
        else cloud++;
        jumps++;
    }
    return jumps;
}



console.log(jumpingOnClouds(test3))
console.log(jump(test3))
