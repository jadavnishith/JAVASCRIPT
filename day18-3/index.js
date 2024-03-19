let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");

document.getElementById("myForm").addEventListener("submit",function(e){
e.preventDefault();

let tr = document.createElement("tr");
let tbody = document.getElementById("tb");

let td1 = document.createElement("td");
td1.innerText = name.value
let td2 = document.createElement("td");
td2.innerText = email.value
let td3 = document.createElement("td");
td3.innerText = phone.value
let td4 = document.createElement("td");
td4.innerText = password.value

tr.append(td1,td2,td3,td4);
tbody.append(tr);

name.value = "";
email.value = "";
phone.value = "";
password.value = "";
});