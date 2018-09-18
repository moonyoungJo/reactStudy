const express = require('express')
const app =express()
const portNo = 3000

app.get('/', (req, res) => {
    res.send('<p><a href="/dice/6">6면체 주사위</a></p><br />' + 
            '<a href="/dice/12">12면체 주사위</a></p>') 
})

app.get('/dice/:num', (req, res) => {
    res.send('주사위의 값은...' + dice(req.params.num))
})

function dice(n) {
    return Math.floor(Math.random() * n + 1) 
}

app.listen(portNo, () => {
    console.log('server is running...')
})