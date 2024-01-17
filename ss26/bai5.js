/*let a = [1, 2, 3, 4, 5];
let daongc = a.reverse();
console.log("Mảng đảo ngược: " + daongc);
*/
let a=[1,2,3,4,5]
let b=[]
for(let i=a.length-1;i>=0;i--){
    b.push(a[i]);
}
console.log("mảng đảo ngược là:" +b);