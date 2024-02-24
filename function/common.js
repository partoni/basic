// 
function fullName(firstName,lastName = 'Ivanov'){
return firstName+lastName
}
fullName('John') // John Ivanov
fullName('John' ,'Petrov') // John Petrov
// Fanction Declaration
function sayHi() {
    alert( "Привет" );
  }
// Fanction Expression
let  sayHi2 = function() {
    alert( "Привет" );
  }
  //arrow function
  let sayHi3 = ()=>{
    alert( "Привет" );
  }
  