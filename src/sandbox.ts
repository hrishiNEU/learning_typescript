//Function signatures

let calc : (a:number, b:number, c:string|number) => void;

calc = (numberOne:number, numberTwo:number, action:string|number) => {
    if (action === "add"){
        return numberOne + numberTwo
    }
    else {
        return numberOne - numberTwo
    }
}

const result = calc(5,10,'add')

console.log(result)

let ninja_action : (obj: {name:string, action:string}) => void;

type human = {name:string, action:string}

ninja_action = (ninja : human) => {
    console.log(`${ninja.name} ${ninja.action}'s you`)
}

let ninjaOne = {name:'john', action:'train'}

const some = ninja_action(ninjaOne)