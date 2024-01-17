let a = [1,1,1,2,2,2,2,2,3,3,3,3,3,3]
let b = prompt("Nhập giá trị cần tìm kiếm: ")
b = parseInt(b)
let cout =0
for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
        cout ++
    }
}
console.log(`số lần xuất hiện của ${b} trong mảng a là ${cout} `)