let n = document.getElementById("n");
let pss = document.getElementById("p");
let em = document.getElementById("em");
let btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    e.preventDefault()

    let data1 = n.value;
    let data2 = pss.value;
    let data3 = em.value;

    console.log(data1);
    console.log(data2);
    console.log(data3);

})