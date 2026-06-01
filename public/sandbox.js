"use strict";
// //We can use any as type if we do not have a fixed type decided. But it is dangerous to use it sometimes
// let age:any = 20
// age = 'Emma'
// age = true
// let mixed: any[] = []
// mixed.push(30)
// mixed.push('Ellie')
// mixed.push(false)
// let ninja : {
//     name: any,
//     age: any
// };
// ninja = {name:'shiro', age:30} // Allowed
// ninja = {name:30, age:'misa'} // Also allowed
let greet;
greet = () => {
    console.log("Hello");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); //should show undefined if 3rd parameter is not sent in the func call
};
add(5, 10);
