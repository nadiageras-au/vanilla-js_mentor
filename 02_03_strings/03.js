// var restoreString = function(s, indices) {
//     let result = [];
//     for (let i = 0; i< indices.length; i++) {
//         result[indices[i]]=s[i]
//     }
//
//     return result.join("")
// };
//
// console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))
//
// /**
//  * @param {string} s
//  * @param {number[]} indices
//  * @return {string}

// var restoreString = function(s, indices) {
//     let result = [];
//     indices.forEach((el, index) => result[el] = s.charAt(index))
//     return result.join('')
// };




// task 2
    let target = "000111";
    let s = target.replaceAll('1', '0')
    console.log(s)