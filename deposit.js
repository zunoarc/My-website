document.getElementById('depositForm').addEventListener('submit', function(e){
e.preventDefault();

let amount = parseFloat(document.getElementById('amount').value);
let txid = document.getElementById('txid').value;

let txids = JSON.parse(localStorage.getItem('txids'));

if(txids.includes(txid)){
alert("TxID already used!");
return;
}

txids.push(txid);
localStorage.setItem('txids', JSON.stringify(txids));

let wallet = parseFloat(localStorage.getItem('wallet'));
wallet += amount;
localStorage.setItem('wallet', wallet);

alert("Deposit Success!");
});