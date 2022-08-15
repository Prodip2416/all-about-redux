const conterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const conterEl2 = document.getElementById('counter2');
const incrementEl2 = document.getElementById('increment2');
const decrementEl2 = document.getElementById('decrement2');

// initial state
let counter = 0;
let counter2 = 0;

incrementEl.addEventListener('click',()=>{
    counter++;
    conterEl.innerText = counter;
});
decrementEl.addEventListener('click',()=>{
    counter--;
    conterEl.innerText = counter;
});
incrementEl2.addEventListener('click',()=>{
    counter2++;
    conterEl2.innerText = counter2;
});
decrementEl2.addEventListener('click',()=>{
    counter2--;
    conterEl2.innerText = counter2;
});