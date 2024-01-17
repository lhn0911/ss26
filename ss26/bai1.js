let a = [3.14, 'Chuoi', 5, true, 8, 'Hello', 10]
let son = a.filter(function(element){
    return Number.isInteger(element)
})

if (son.length > 0) {
    console.log("Các phần tử là số nguyên trong mảng:"+ son)
} else {
    console.log("Trong mảng không tồn tại số nguyên.")
}
