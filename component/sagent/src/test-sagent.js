const request = require('superagent')

//웹서버를 실행시켜놓고 진행해야 합니다.
const URL = 'http://localhost:3000/fruits.json'
request.get(URL).end(callbackGet)

function callbackGet(err, res) {
    if (err){
        return
    }
    console.log(res.body)
}