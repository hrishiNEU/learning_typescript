//The types of the Arrays are decided at the time of declaration. we can't change it later

let names = ['ben','peter','mary']

names.push('josh')
//names.push(3) -- Not allowed

let numbers = [3,5,1,6,8,7]

numbers.push(12)
//numbers.push('sam') -- gives error

//For objects the same rule applies

let actor = {
    name: 'Ranbir',
    movie: 'Animal',
    age: 30
}

// ninja.age = 'Forty' -- not allowed
// Also, extra properties can't be added 