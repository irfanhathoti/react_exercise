import React, { Component } from 'react';

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }

    HandleInput = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    HandleSubmit = (e) => {

        e.preventDefault();
        this.props.AddData(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>

                    <input  type="text" name="name" value={this.state.name} onChange={this.HandleInput} />
                    <button  >add</button>
                </form>
                <button  onClick={this.props.Delete}>Remove All</button>
            </div>
        );
    }
}

export default Action;