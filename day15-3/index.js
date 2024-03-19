// document.getElementById("two").classList.add("one") // id ma class add krva ,mate

// document.getElementsByClassName('two')[0].classList.add("one") // aek class ma bijo class add krva mate

// document.getElementsByClassName("two")[0].classList.remove("one") // class remove krva mate

//document.getElementById("two").setAttribute("class","one three") // class attribute add krva mate

// let a = document.getElementsByTagName("p")[0];
// function abc(){
//     a.innerText="lerem ispumlerem ispumlerem ispumlerem ispum"
// }

// document.getElementById("btn").onclick=abc;
// function abc(){
//     console.log("hello");
// }

// let a = document.getElementById("btn");
// a.addEventListener("click",function(){
//     console.log("hello")
// })

let a = document.getElementById("btn");
a.addEventListener("click",abc);
function abc(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

