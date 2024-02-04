let arr = [1,3,2,4,5,3]

arr.at(-1) //3

// pop/push, shift/unshift

arr.splice(2,1,5) //[1,3,5,4,5,3]
let newArr = arr.slice(1,3) //[3,2]
let newArr2 = arr.slice() // [1,3,2,4,5,3]

//arr.concat()

//arr.indexOf(item, from) , arr.includes(i,from) --- when comparing uses "==="
arr.indexOf(3) // 2
arr.lastIndexOf(3) // 5
arr.includes(1) // true


let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 2, name: "Леша"}
  ];
  users.find((item,index,array)=>item.id==2) // {id: 2, name: "Петя"}
  users.filter((item,index,array)=>item.id==2) // [{id: 2, name: "Петя"},{id: 2, name: "Леша"}]

  let users2 = users.map((item,index,array)=>{item.id==2?'yes':'no'}) //new array ['no', 'yes','no', 'yes']
  arr.sort()

