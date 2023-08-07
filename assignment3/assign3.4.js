// Given an array [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name:
//     'Vice-president James' }, { id: 3016, name: 'House-captain Otis' }, { id:
//     4818, name: 'Prefect Finneas' }]. Create an array containing just the id of
//     every individual. (write two solution one using iterator and another using
//     built-in method)


let arr4 = [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name:
    'Vice-president James' }, { id: 3016, name: 'House-captain Otis' }, { id:
    4818, name: 'Prefect Finneas' }]


// for(let n of arr4){

//     console.log(n.id);
// }

arr4.forEach((n)=>{
    console.log(n.id);
})
