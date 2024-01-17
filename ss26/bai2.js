let a = [10, 4, 7, 2, 8, 5, 1];
let b = +prompt("Nhập giá trị cần tìm kiếm: ");
b = parseInt(b);
let ktra = false;
for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
        console.log(`Phần tử ${b} được tìm thấy tại vị trí ${i}`);
        ktra = true;
        break;
    }
}
if (!ktra) {
    console.log("Phần tử không tồn tại trong mảng");
}
