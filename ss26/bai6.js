let a = [-3, 5, -7, 2, 8, -1, 4, -6];
let b= [];

for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
        b.unshift(a[i]);
  }else{
        b.push(a[i]);
  }
}
console.log("Mảng sau khi di chuyển:",b);
