//Program-1 reduce here acc is Accumalator and currval is CurrentValue

const arr=[1,2,3,4,5]
const Total=arr.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
  
},0)
console.log(`Total:${Total}`);

/*
In the reduce method, the accumulator (acc) will be updated with each iteration as it accumulates the sum of the array elements. Here's a step-by-step breakdown of how the reduce method works in your code:

Initial state:

acc (accumulator) is initialized to 0 (the second argument of the reduce method).
currval (current value) is the first element of the array (1).
First iteration:

acc: 0 and currval: 1
acc is updated to 0 + 1 = 1.
Second iteration:

acc: 1 and currval: 2
acc is updated to 1 + 2 = 3.
Third iteration:

acc: 3 and currval: 3
acc is updated to 3 + 3 = 6.
Fourth iteration:

acc: 6 and currval: 4
acc is updated to 6 + 4 = 10.
Fifth iteration:

acc: 10 and currval: 5
acc is updated to 10 + 5 = 15.
At the end of all iterations, the acc will be 15, which is the total sum of the array elements.


//output:
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
acc: 6 and currval: 4
acc: 10 and currval: 5
Total: 15
This confirms that the accumulator (acc) is updated correctly in each iteration, resulting in the final total sum.
*/