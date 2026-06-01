"use strict";
//Function signatures
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
const result = calc(5, 10, 'add');
console.log(result);
let ninja_action;
ninja_action = (ninja) => {
    console.log(`${ninja.name} ${ninja.action}'s you`);
};
let ninjaOne = { name: 'john', action: 'train' };
const some = ninja_action(ninjaOne);
