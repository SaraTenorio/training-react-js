import { Component } from 'react'

export default class ClassComp extends Component {

    state = {
        name: '',
    }

    handleChange = ({target:{value}}) => {
        this.setState({ name: value })
    }

    render() {
        return(
            <>
            <h2>Class Component</h2>
            <h3>O meu nome: {this.state.name} </h3>

            <input type='text'
            value={this.state.name}
            onChange={this.handleChange} />
            </>
        )
    }
}