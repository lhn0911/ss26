let a=+prompt("Nhập a")
let b=+prompt("Nhập b")
let c=[]
let d= []
for(let i=1;i<=a;i++){
    if(i%b==0){
        c.push(i)
    }
}
for(let j=1;j<=b;j++){
    if(j%a==0){
        d.push(j)
    }
}
console.log(c)
console.log(d)