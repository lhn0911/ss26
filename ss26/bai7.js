let a = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let b = +prompt("Nhập vào một số bất kỳ:");
let c = [];
let ktra = false;
for (let i = 0; i < a.length; i++) {
    let temp = a[i];
    c = [a[i]];

    for (let j = i + 1; j < a.length; j++) {
        temp += a[j];
        c.push(a[j]);
        if (temp === b) {
            ktra = true;
            break;
        }
    }
    if (ktra) {
        break;
    }
}
if (ktra) {
    console.log(c);
} else {
    console.log("Không có mảng con thỏa mãn.");
}
