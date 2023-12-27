let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a.length);

console.log(
  a.map((i)=>{
    return i ** 2;
  })
);

console.log(a.filter(i=>{
    return i%2=0;
}));

console.log(a.reduce((a,b)=>{
    return a+b;
}))


// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
