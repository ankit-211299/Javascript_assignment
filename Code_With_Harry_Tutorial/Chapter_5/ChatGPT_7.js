//Create two 2D arrays (matrices) of the same size.
const arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const arr2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
];

console.log(arr1,arr2);

//Write a function to add these two matrices.
let add_mat1 = (arr1,arr2) => {
    
    if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
        throw new Error('Matices must be of same dimensions');
    }

    const row = arr1.length;
    const col = arr1[0].length;

    let res = [];

    for(let i=0;i<row;i++){
        let newRow = [];

        for(let j=0;j<col;j++){
            newRow.push(arr1[i][j]+arr2[i][j]);
        }
        res.push(newRow);
    }
    return res;
}
console.log("Sum =",add_mat1(arr1,arr2));

//using reduce
let add_mat2 = (arr1,arr2) => {
    if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
        throw new Error ('Matices must be of same dinemnsions !');
    }

    return arr1.reduce((res,row,rowi) => {
        res.push(
            row.reduce((newRow,col,coli) => {
                newRow.push(col + arr2[rowi][coli]);
                return newRow;
            },[])
        );
        return res;
    },[]);
};
console.log("Using Reduce",add_mat2(arr1,arr2));

//Write a function to multiply these two matrices.
let mat_mult = (arr1,arr2) => {
    const rows1 = arr1.length;
    const cols1 = arr1[0].length;
    const rows2 = arr2.length;
    const cols2 = arr2[0].length;

    if(cols1 !== rows2){
        throw new Error('Cannot be multiplied wrong dimensions');
    }

    const result = new Array(rows1).fill(0).map(() => new Array(cols2).fill(0));
    for(let i=0;i<rows1;i++){
        for(let j=0;j<cols2;j++){
            for(let k=0;k<cols1;k++){
                result[i][j] = arr1[i][k]+arr2[k][j];
            }
        }
    }
    return result;
};

console.log(mat_mult(arr1,arr2));

//Implement a function to find the transpose of a matrix.
let mat_transpose = (arr) => {
    const row = arr.length;
    const col = arr[0].length;


};

//Create a 2D array filled with random letters.
const words = [
    ["word1","word2","word3"],
    ["word4","word5","word6"],
    ["word7","word8","word9"]
];

//Implement a function to search for a given word (horizontal or vertical) in the grid.
let n = "word";

let newWord = [];
words.forEach(element => {
    let newSet = new Set(element);
    newWord.push(newSet);
});

let flag = false;
newWord.forEach(ele => {
    if(ele.has(n)){
        flag = true;
        return;
    }
});

if(flag == true)
    console.log("Found");
else
    console.log("Not found");