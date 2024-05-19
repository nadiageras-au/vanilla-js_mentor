// 1. Extract the values of a given Property From an Array of Objects

// let input = [
//     { name: "John", age: 21, city: "New York" },
//     { name: "Mike", age: 28, city: "Moscow" },
//     { name: "Danny", age: 30, city: "London" },
//     { name: "Lisa", age: 26, city: "Paris" },
//     { name: "Sophie", age: 19, city: "Berlin" },
// ];
//
// // extractValues = (arr, property) => {} //Output = ["John", "Mike", "Danny", "Lisa", "Sophie"];


//Junior solution
// const extractValues = (arr, property) => {
//   let output = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i][property]);
//   }
//
//   return output;
// };
//
// let result = extractValues(input, "name");
// console.log(result);

// //Middle solution
// const extractValues = (arr, property) => {
//     let output = arr.map((element) => element[property]);
//
//     return output;
// };

//2. Rotate the String k Times in the Left Direction
//let string = "javascript"
// let n = 2
//output = "vascriptja"
// function rotateLeft(string, n) {
//     let part1 = string.substring(n, string.length);
//     let part2 = string.substring(0, n);
//
//     let output = part1 + part2;
//     return output;
// }
//
// let string = "javascript";
// let n = 2;
//
// console.log(rotateLeft(string, n));

//3. Calculate the Number of Days Between Two Dates
//The input will consist of two dates in DD/MM/YYYY format.
// let date1 = "08/10/2021";
// let date2 = "09/11/2021"
//
// const findDays = (date1, date2) => {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);
//
//     let difference = d2.getTime() - d1.getTime();
//
//     let output = difference / (1000 * 3600 * 24);
//
//     return Math.floor(output);
// };
//
// let date1 = "11/01/2021";
// let date2 = "11/03/2021";
//
// console.log(findDays(date1, date2));

