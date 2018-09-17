//iterator는 지금 어디 있는지 파악할 수 있는 책깔피 같은 객체
class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp:Date.now()});
    }
    //Symbol.iterator 심볼 메서드를 구현하면 iterable한 객체가 된다.
    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return{
            next() {
                if(i >= messages.length)
                    return {value:undefined, done:true};
                return {value:messages[i++], done:false};
            }
        }
    }
}
const log = new Log();
log.add('hi');
log.add('hello');

for(let item of log){
    console.log(`item.message : ${item.message}`)
}