

/**
 * Create an array of values that are shuffled, meant to plug into our bar chart data
 * 
 * @param count 
 */
export function createShuffledArray(count=200): number[]{

    let res: number[] = []
    let nums: number[] = [];

    for (let i = 1; i < count + 1; i++){
        nums.push(i);
    }

    while (nums.length > 0){

        let randomIndex = Math.floor(Math.random() * nums.length);

        res.push(nums[randomIndex])
        nums.splice(randomIndex, 1);

        console.log(nums)

    }

    return res;
} 