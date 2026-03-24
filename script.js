function goLogin(){
alert("Login required!");
window.location.href = "login.html";
}

// init storage
if(!localStorage.getItem("wallet")) localStorage.setItem("wallet", 0);
if(!localStorage.getItem("txids")) localStorage.setItem("txids", JSON.stringify([]));
if(!localStorage.getItem("orders")) localStorage.setItem("orders", JSON.stringify([]));