import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})


// Interfaces
// interface isPerson{
//     name: string;
//     age: number;
//     speak(a:string): void;
//     spend(a:number):number;
// }

// const me: isPerson = {
//     name: 'Harry',
//     age: 30,
//     speak(text:string){
//         console.log(text)
//     },
//     spend(money:number){
//         console.log('I spend ',money)
//         return money
//     }
// }

// const greetPerson = (person: isPerson) => {
//     console.log('Hello',person.name)
// }

// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new Invoice('Lin','UI UX',60);
// docTwo = new Invoice('Dan','Infra setup',80);

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// let invOne = new Invoice('Chun','Web development',50);
// let invTwo = new Invoice('Shin','System design',70);

// let invoices : Invoice[] = []

// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client,inv.amount, inv.format()) 
// })