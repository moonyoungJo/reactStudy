import React from 'react'
import PropTypes from 'prop-types'

export default class RadioForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items: props.items,
            value: ''
        }
    }
    render() {
        const radiolist = this.state.items.map(i => {
            return(<div key={i}>
                <label>
                    <input type='radio'
                    name='items' value={i}
                    checked={this.state.value ===i}
                    onChange={e=>this.doChange(e)} /> {i}
                </label>
            </div>)
        })

        return (<div>
            <form onSubmit={e => this.doSubmit(e)}>
                {radiolist}
                <input type='submit' />
            </form>
        </div>)
    }
    doChange(e) {
        this.setState({value: e.target.value})
    }
    doSubmit(e) {
        e.preventDefault()
        window.alert(this.state.value)
    }
}

RadioForm.propTypes = {
    items: PropTypes.obj
}
RadioForm.defaultProps = {
    items: ['abcd', 'dgef', 'bffb']
}

