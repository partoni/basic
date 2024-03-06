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
