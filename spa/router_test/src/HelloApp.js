import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom'

const HelloApp = () => (
    <Router>
        <div style={{margin:20}}>
            <Route exact path='/' component={Home} />
            <Route path='/ko' component={HelloKorean} />
            <Route path='/ja' component={HelloJapanes} />
            <Route path='/en' component={HelloEnglish} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h1>Hello App</h1>
        <p>언어를 선택해 주세요</p>
        <ul>
            <li><a href='ko'>한국어</a></li>
            <li><a href='ja'>일본어</a></li>
            <li><a href='en'>영어</a></li>
        </ul>
    </div>
)

const HelloKorean = () => (
    <div>
        <h1>안녕하세요</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)
const HelloJapanes = () => (
    <div>
        <h1>안녕하세요(일본어)</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)
const HelloEnglish = () => (
    <div>
        <h1>안녕하세요(english)</h1>
        <p><a href='/'>뒤로가기</a></p>
    </div>
)

export default HelloApp