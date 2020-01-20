/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let answerArr = []
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] === target && i !== j)
        answerArr.push(i, j)
    }
    return answerArr
  }
    console.log(nums)
};
