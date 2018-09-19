import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom'

const HelloApp2 = () => (
    <Router>
        <div style={{margin:20}}>
            <HelloHeader />
            <div>
                <Route exact path='/' component={HelloKorean} />
                <Route path='/ko' component={HelloKorean} />
                <Route path='/ja' component={HelloJapanes} />
                <Route path='/en' component={HelloEnglish} />
            </div>
            <HelloFooter />
        </div>
    </Router>
)

const styleHeader = {
    backgroundColor: 'orange',
    color: 'white',
    padding: 8
}
const HelloHeader = () => (
    <div>
        <h3 style={styleHeader}>HelloApp v2</h3>
        <p>
            [<a href='/ko'>한국어</a>]
            [<a href='/ja'>일본어</a>]
            [<a href='/en'>영어</a>]
        </p>
    </div>
)
const HelloFooter = () => (
    <div style={styleHeader}>
        인사를 다양한 언어로 출력하는 애플리케이션입니다.
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

export default HelloApp2