function squareSum(numbers){
    return numbers.reduce((acc,item)=>acc+item**2,0)
    }
   
    ///
//    function toCamelCase(str){
//     let arrayWord = str.split(/[-_]/)
//     arrayWord.forEach((element,index,array) => {
//         if(index!==0) {
//             let newStr = element.slice(1)
//             array[index] = element[0].toUpperCase()+newStr
//         }
//            })
//     return arrayWord.join('')
//         }
//     console.log(toCamelCase("the_stealth-warrior"))
   
    // function sum (numbers) {
    //     "use strict";
    //   if(numbers.length==0)return 0
    //     let sum = 0
    //     numbers.forEach((el)=>{
    //         sum+=el
    //         console.log(sum)
    //     })
    //     return sum
    // };
    // sum([1,2,3])
    // function ipsBetween(start, end){
    //     //TODO
    //     let arrStart = start.split('.')
    //     let arrEnd = end.split('.')
    //     function calculate(arr){
    //         // console.log('arr--',arr);
    //       let count = 0
    //       if(+arr[0]>0) {
    //         // console.log('0---',arrStart[0]);
    //       count += +arr[0]*256**3
    //     }
    //     if(+arr[1]>0) {
    //       count += +arr[1]*256**2
    //     }
    //     if(+arr[2]>0) {
    //         console.log(arrStart[2]);
    //       count += +arr[2]*256
    //     }
    //     if(+arr[3]>0) {
    //       count += +arr[3]
    //     }
    //     console.log(count);
    //       return count
    //     }
    //     return calculate(arrEnd)-calculate(arrStart)
    //   }
    //   console.log(ipsBetween("160.0.0.0", "160.0.1.0"));
      //function bowlingPins(arr) {
        // let arrPins =['I','I','I','I','I','I','I','I','I','I']
        // arrPins.forEach((el,index)=>{
        //   if(arr.includes(index+1))arrPins[index]=' '
        // })
        // arrPins.reverse()
        // let result = []
        //     for(let i=0;i<arrPins.length;i++){
                
        //         if([5,8,10].includes(i+1)) {
        //             console.log(i)
        //             result.push('/n')
        //             result.push(arrPins[i])
        //         }else{result.push(arrPins[i])}
        //       }
        //       return result
          //  }
          function bowlingPins(arr) {
            let matrix = [
                ['7',' ','8',' ','9',' ','10'],
                [' ','4',' ','5',' ','6',' ' ],
                [' ',' ','2',' ','3',' ',' '],
                [' ',' ',' ','1',' ',' ',' ']
            ]
            matrix.forEach((el,index,array)=>{
                for(let i = 0;i<el.length;i++){
                    if(arr.includes(+el[i]))array[index][i]=' '
                    if(+el[i]>0)array[index][i]='I'
                }
               matrix[index]= array[index].join('')
            })
              return matrix.join('\n')       
          }



      console.log(bowlingPins([1,5,6]));