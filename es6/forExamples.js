const arr = [1, 2, 3];

//forEach : 오직 Array 객체에서만 사용가능
arr.forEach((item) => {
    console.log(item);
})
console.log();

//for-of : Symbol.iterator 속성을 가지고 있어야 가능
for(let item of arr){
    console.log(item);
}
console.log();

//for-in : 객체의 속성들을 반복하여 작업 수행 가능. key에 접근
for(let index in arr){
    console.log(arr[index]);
}