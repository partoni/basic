// == 
null==undefined //

//  > < >= <= / * and other
// null becomes 0
// undefined becomes NaN

// string
'tota'> 'toba'
'a'>'A'
'tota'>'tot'
'c'>'ad'



// ===
// compare without type conversion

//---type conversions---
String(null)// 'null'
String(undefined)// 'undefined'
String(NaN)// 'NaN'
// --||--||-- 

//number
console.log(Number(NaN));
Number('')//0
Number('0') //0
Number('1')//1
Number('1c')//NaN
Number('.1')//0.1
Number('-3')//-3
Number(null)//0
Number(undefined)// NaN
Number(NAN)// error


//boolen

Boolean(0)//as well '',null,undefined, NaN becomes false


//   || converts to boolen and returns original value,but if all oprands converts to false returns last

let c = NaN || null || 0 || '' // c==''

//  && returns first false or if all truthy returns last
let d = NaN && null && 0 && '' //d==NaN
let f = 1 && 'hhg' && {} && '00' //f=='00'

a||=b  // equivalent a||(a=b)
a&&=b //equivalent a&&(a=b)

//  ?? return first operand is not equal null or undefined
let g = 0??null // g==0
// there is ??=



