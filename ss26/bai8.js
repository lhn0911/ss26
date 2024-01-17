let a = [1, 2, 3, 3, 2, 1, 9, 8, 7, 8, 9];
let b = [];

for (let i = 0; i < a.length; i++) {
  let temp = a[i];
  if (b.includes(temp)) {
    console.log(temp);
  } else {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === temp) {
        count++;
        if (count === 2) {
          b.push(temp);
          console.log(temp);
          break;
        }
      }
    }
  }
}
console.log("Các phần tử xuất hiện từ hai lần trở lên:"+b);
