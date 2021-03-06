import React, { Component } from 'react';
import './App.css';
import request from 'superagent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:null
    }
  }
  componentWillMount() {
    request.get('./fruits.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
    })
  }
  loadedJSON (err, res) {
    if(err) {
      console.log('json을 읽는 동안 오류가 발생')
      return
    }
    this.setState({
      items: res.body
    })
  }
  render() {
    if(!this.state.items){
      return <div className='APP'>읽어 들이는 중입니다.</div>
    }
    const options = this.state.items.map(e => {
      return <option value={e.price} key={e.name}>{e.name}</option>
    })
    return (
     <div className='App'>
      과일 : <select>{options}</select>
     </div> 
    )
  }
}

export default App;
