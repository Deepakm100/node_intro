// module are used so that we can share the code we want to share and we can distribute ouur code in different function.

// const name1 = "Bansal"
// const name2 = "abhay"  -> this part going in seperate file

// const sayHi = (name) =>{    
// console.log('namaste ${name} ji'); 
// }    -> this also going in seprate file and we goona access by using module and require

const names = require('./part1_1') // use ./ when you create your module
const sayHi = require('./part1_2')
sayHi("Deepak")

sayHi(names.name1)
sayHi(names.name2)