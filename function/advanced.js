//рекурсия
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  //замыкания
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2

  // пользовательские св-ва
  function makeCounter() {
    
  
     function countFun() {
      countFun.count++; // есть доступ к внешней переменной "count"
    };
    countFun.count=0
    return countFun
  }
  let count = makeCounter()
  count() // 1
  count() // 2
  //but we can:
  console.log(count.count) 

//decorator
// кэшируем результат для быстрой рапботы
function f1(a){
    return a+3
}

function dec(f){
    let cashe = new Map()

    
    return function(x){
        if(cashe.has(x)){
            return cashe.get(x)
        }
        let result = f(x)
        cashe.set(x,result)
        return result
    }
}
f1 = dec(f1)
// call apply
//decorator above won"t function with method of object 
//for that we can use call and apply

let f2 = {
    age:10,
    slow(a){
        return a+this.age
    }
}

function dec2(f){
    let cashe = new Map()

    
    return function(x){
        if(cashe.has(x)){
            return cashe.get(x)
        }
        //let result = f(x)  this way won't  work
        let result = f.call(this,x)
        // if "slow" would have few arguments
        //let result = f.call(this,...arguments)
        //or
        //let result = f.apply(this,arguments)
        // arguments - псевдомассив
        cashe.set(x,result)
        return result
    }
}
// заимствование метода

function f3(){
    return [].join.call(arguments)
}
// заставляем join отработать в котексте arguments

f3(3,6)  //"3,5"


