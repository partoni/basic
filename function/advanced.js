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
