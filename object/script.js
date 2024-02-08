let obj ={
    name:'Vova',
    lastName:'Ivanov',
    age: 30,
    fullName:function(){
        return this.name+this.lastName}
    
}

obj.keys()  // [name,lastName,fullName]
obj.values()  //['Vova','Ivanov',function]
let arrayFromObject = obj.entries()  // [['name','Vova'],['lastName','Ivanov'],['fullName',function]]

Object.fromEntries(arrayFromObject)  // make object

// loop throuпр
for(let i in obj){}