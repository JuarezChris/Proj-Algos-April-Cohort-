// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except 1, the sum is 2, 3 ,4 , 5 = 14.
// Sum everything except 2, the sum is 1, 3 , 4, 5 = 13.


const minMaxSum = (arr)  => {
    // create a variable minSum and maxSum
    // for min loop until second to last
    // for each loop iteration we add each number
    // print minSum and maxSum
    let total = 0
    arr.forEach((num) => total += num)
    let minSum = total - arr[4]
    let maxSum = total - arr[0]
    console.log(`${minSum} ${maxSum}`)
}

minMaxSum([1,2,3,4,5])
minMaxSum([2,3,4,5,10])
