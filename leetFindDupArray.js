/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let answerArr = [];
    nums.sort((a,b)=> a-b)
    console.log(nums)

    for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i+1]){
        answerArr.push(nums[i])
      }
    }
    
   return answerArr
};
