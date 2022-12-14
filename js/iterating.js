(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Aharown', 'Fernando', 'Jona', 'Mike'];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names);

    console.log("")

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    console.log("")

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    console.log("")
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log(`comment: Running foreach loop.`);
    console.log("");

    names.forEach(function(name){
        console.log(name);
    });

    console.log("")

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));


    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    function last(array) {
        let i = array.length - 1;
        return array[i];
    }
})();
// console.log("");
//
//
//
//
// console.log(`Mini exercises.`);
//
// let classMates = ['Action', 'Fernando', 'Jona'];
// console.log(classMates);
// console.log("");
// console.log(classMates[0]);
// console.log(classMates[1]);
// console.log(classMates[2]);
// console.log("");
// classMates[1] = "Justin";
// console.log(classMates);
//
// console.log('');
//
// console.log("");
//
// const numbers = [3, 2 ,4];
//
//
// let total = true;
// numbers.forEach(function(number){
//     total += number;
// });
//
// console.log(total);
//
//
// console.log('');
// console.log(`mini exercise 2`);
// console.log('');
//
// for(let i = 0; i < classMates.length; i += 1 ) {
//     console.log(classMates[i]);
// }
//
// console.log('');
//
// classMates.forEach(function (name){
//     console.log(name);
// })
//
//
// console.log('');

// !! Write a function, logNums, that takes in an array and logs each number in the array !!
// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

let num = [1, 2, 3, 4, 5];

logNums(num);

function logNums(array){
    for(let i = 0; i < array.length; i += 1){
        console.log(array[i]);
    }
}

let StrArr = ["Follow", "the", "yellow", "brick", "road"];
console.log(StrArr);

console.log(returnLongString(StrArr));

function returnLongString(arr) {
    return arr.join(" ");

}

function returnArrSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1){
        sum += arr[i];
    }
    return sum;
}

console.log(returnArrSum(num));
