function squareSum(numbers){
    return numbers.reduce((acc,item)=>acc+item**2,0)
    }
   
    ///
   function toCamelCase(str){
    let arrayWord = str.split(/[-_]/)
    arrayWord.forEach((element,index,array) => {
        if(index!==0) {
            let newStr = element.slice(1)
            array[index] = element[0].toUpperCase()+newStr
        }
           })
    return arrayWord.join('')
        }
    console.log(toCamelCase("the_stealth-warrior"))
   