import { Button } from 'bootstrap'
import React, { Component } from 'react'

class Counter extends Component {
    // 
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    Increament = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    Decreament = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    render() {
        return (
            <div>
                <h1>
                    {
                        this.state.count
                    }
                </h1>
                <button onClick={this.Increament}>Increase</button>
                <button onClick={this.Decreament}>Decrease</button>
            </div>
        )
    }
}
export default Counter
