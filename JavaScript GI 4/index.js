//Easy Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const array1 = [1 , 4 , 7];
const array2 = [10, 5];
const array3 = [1.5, 3, 2.5, 1];

const sum = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total;
}

const returnAverage = (array) => {
    const arraySum = sum(array);
    return arraySum / array.length;
}

console.log(returnAverage(array1));
console.log(returnAverage(array2));
console.log(returnAverage(array3));

//Medium Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//You are given a target value to search. If found in the array, return its index, otherwise return -1.
//You may assume no duplicate exists in the array.

const target = 0;

function search(){
    const array = [4,5,6,7,0,1,2];
     console.log(array.indexOf(target));
} 

search(target);



//Hard Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. 
//Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 

//Check hard.html


//Very Hard You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up
//that amount. If that amount of money cannot be made up by any combination of the coins, return -1.


const coins = [1, 2, 5];
const amounts = 11; 
let initialResult = '';

const change = (coins, amount) => {
    const MinCoins = (coins, amount, sum, i, result, count) => {
        if (amount == 0){
            return -1;
        }

        if (sum > amount){
            return result;
        }

        if (sum == amount){
            result = Math.min(count, result)
            return result
        }

        if (i <= coins.length - 1){ 
            count++
            result = MinCoins(coins, i, sum+coins[i], amount, count, result)

            count--
            result = MinCoins(coins, i+1, sum, amount, count, result)
        }
        return result
    }

    const result = MinCoins(coins, 0, 0, amount, 0, amount+1)

    if (result == initialResult){
        return -1
    } else {
        return result
    }
}

console.log(change(coins, amounts))