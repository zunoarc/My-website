let balance = localStorage.getItem('wallet') || 0;
document.getElementById('balance').innerText = balance;

let orders = JSON.parse(localStorage.getItem('orders')) || [];
let list = document.getElementById('orders');

orders.forEach(o=>{
let li = document.createElement('li');
li.innerText = o;
list.appendChild(li);
});