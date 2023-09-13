// //Implement a function that removes duplicates from an array.

// let arr = [3,5,3,6,7,8,7,1,10];
// console.log(arr);

// const new_arr = new Set(arr);
// console.log("Using Set() - ",new_arr);

// //using reduce

// const arr2 = arr.reduce((newarr,num) => {
//     if(!newarr.includes(num)){
//         newarr.push(num);
//     }
//     return newarr;
// },[]);

// console.log("Using reduce",arr2);

// //Implement a function that rotates an array to the right by a given number of positions.

// const arr_rotate = (arr,n) => {
//     const length = arr.length;
//     const new_pos = (length-(n%length))%length;
//     console.log(new_pos);

//     return arr.slice(new_pos).concat(arr.slice(0,new_pos));
// };
// console.log(arr_rotate([1,2,3,4,5,6],2));

// //Implement a function that finds the intersection of two arrays (elements that exist in both arrays).
// let arr_1 = [21,12,19,13,22,43];
// let arr_2 = [11,15,19,43,32,31,76];

// let intersection = (arr1,arr2) => {
//     arr1.forEach((ele) => {
//         if(arr2.includes(ele))
//             console.log(ele);
//     });
// };
// console.log("Using for each - ");
// intersection(arr_1,arr_2);

// //alternative way

// let intersection_2 = arr_1.filter(ele => arr_2.includes(ele));

// console.log("Using filter",intersection_2);

// //Implement a function that flattens a nested array (converts a 2D array to a 1D array).
// let arr_3 = [1,"ankit",[[4,5],{"ankit":23}],[7,[[[8]]]]];
// let flattened_array = (arr) => {
//     return arr.reduce((flat,current)=>{
//         if(Array.isArray(current)){
//             flat.push(...flattened_array(current));
//         }
//         else{
//             flat.push(current);
//         }
//         return flat;
//     },[]);
// };
// console.log(flattened_array(arr_3));

//Implement a function that returns the first non-repeated element in an array.
// let arr_4 = [21, 22, 21, 23, 24, 22];

// let non_repeat = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     let ele = arr.shift();
//     if (arr.includes(ele)) arr.push(ele);
//     else {
//     //   console.log("hh",ele);
//       return;
//     }
//   }
// };
// non_repeat(arr_4);

//alternative_1
// arr_4 = [21, 22, 21, 23, 24, 22];

// let non_repeat_2 = (arr) => {
//     let new_arr = [];
//     new_arr.push(arr[arr.length-1]);
    
//     for(var i=(arr.length-2);i>=0;i--){
//         if(new_arr.includes(arr[i])){
//             if(new_arr[new_arr.length-1]==arr[i])
//                 new_arr.pop();
//         }
//         else
//             new_arr.push(arr[i]);
//     }
//     console.log(new_arr);
// }
// non_repeat_2(arr_4);

//alternative_2
const  arr= [21, 24, 23 ,22, 21, 23, 24, 22];

const new_set = new Set()
const output = new Set()

arr.forEach((ele) => {
    if (new_set.has(ele)) {
        output.delete(ele)
    } else {
        new_set.add(ele);
        output.add(ele)
    }
})
if (output.size === 0) 
    console.log("Not present");
else
    console.log (Array.from(output)[0]);