let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let r = Math.random();

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"

}

if(r>0.1){
    alert(`Your result is : ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    alert(`Your result is : ${eval(`${a} ${c} ${b}`)}`);
}