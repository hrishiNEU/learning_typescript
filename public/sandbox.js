"use strict";
// TS file does not access to index.html file. So it doesn't know if anchor is used or not.
// Hence, it will give a warning saying there is a possibility of null
// To fix this we can add ! at the end or add an if check
const anchor = document.querySelector('a');
// if (anchor.href){
//     console.log(anchor.href);
// }
console.log(anchor.href);
// But what if there are many anchor elements? We can use typecasting in that case.
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
