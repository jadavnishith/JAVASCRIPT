// let a = document.getElementsByClassName("one")
// for(let i=0; i<a.length; i++){
//     console.log(a[i].innerHTML)
// }

// let a = document.querySelectorAll(".one")[0].innerHTML;
// console.log(a);

let like = 0;
let a = document.getElementById("count")
//like
function abc(){
    like++;
    console.log(like)
    a.innerText=like
}
//D-like
function xyz(){
    if(like<1){
        a.innerText=0
    }else{
        like--;
        a.innerText=like
    }
    console.log(like)
    
}