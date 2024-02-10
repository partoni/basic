let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(2); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(3); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value) //выводит сумму


function Accumulator(val){
this.value = val
this.read=(ar)=>{
    this.value+=ar
return this.value
}
}