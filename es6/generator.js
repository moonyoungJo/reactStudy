//제너레이터 : 이터레이터를 사용해 자신의 실행을 제어하는 함수
function * counter () {
    yield 1
    yield 2
    yield 3
}
const g = counter()

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log();

function * genFibonacci() {
    let a = 0
    let b = 1
    while(true){
        [a, b] = [b, a+b]
        yield a
    }
}
const fib = genFibonacci();
for(const num of fib){
    if(num > 50)
        break;
    console.log(num)
}
console.log();

function * mom() {
    const food = yield("what do you eat for lunch?");
    const result = yield(`why you eat ${food} for lunch?`);
}
const myMom = mom();
let question = myMom.next();
console.log(question);
question = myMom.next("pizza");
console.log(question);
question = myMom.next();
console.log(question);