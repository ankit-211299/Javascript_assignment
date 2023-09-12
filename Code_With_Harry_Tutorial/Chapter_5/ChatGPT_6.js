//Implement a function that removes duplicates from an array.

let arr = [3,5,3,6,7,8,7,1,10];
console.log(arr);

const new_arr = new Set(arr);
console.log("Using Set() - ",new_arr);

//using reduce

const arr2 = arr.reduce((newarr,num) => {
    if(!newarr.includes(num)){
        newarr.push(num);
    }
    return newarr;
},[]);

console.log("Using reduce",arr2);

//Implement a function that rotates an array to the right by a given number of positions.

const arr_rotate = (arr,n) => {
    const length = arr.length;
    const new_pos = (length-(n%length))%length;
    console.log(new_pos);

    return arr.slice(new_pos).concat(arr.slice(0,new_pos));
};
console.log(arr_rotate([1,2,3,4,5,6],2));

//Alternative

const number = [1,2,3,4,5,6,7,8,9,10];

const rotate = (arr,n) => {

};

//Implement a function that finds the intersection of two arrays (elements that exist in both arrays).
