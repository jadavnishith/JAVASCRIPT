let a = document.getElementById("one");
console.log(a);
a.style.color = "aqua";

// prime number 
let p = 9;
let printcount = 0;
for(let i=1; i<=p; i++){
    if(p % i == 0 ){
        printcount++;
    }
}
if(printcount == 2){
    console.log("prime");
}else{
    console.log("not prime")
}