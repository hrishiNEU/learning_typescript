//Arrays can have multiple types but they have to be explicitly defined.

let mixed_array:(number|string)[] = []

mixed_array.push(20)
mixed_array.push('Sam')
//mixed_array.push(true) -- Error

//Same can be done to objects as well

let ninjaOne: object;
ninjaOne = {name:'chan', age:30}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name:'shin', age:45, beltColor:'green'}

// /ninjaTwo = {name:'shin', age:45, beltColor:'green' , skill:[sdfsf,sdfsf]} -- Not allowed.