//this is a solution I found saved here for further review 


function getMaxProfit(arr) {
	  let minIdx = 0;
    let maxIdx = 1;
    let currMin = 0;
    let maxProfit = 0;

    for(let i = 1; i < arr.length; i++) {

        // new current min.
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }
        
        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }

    }

    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}



getMaxProfit([13,10,8,4,10]) 
