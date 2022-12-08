import React, { Component } from 'react';


class Addstudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            Address: "",
        };
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();


        if ((this.state.firstName && this.state.lastName && this.state.Address) !== "") {
            console.log(this.state);
            this.props.addStudent(this.state)
        }
        else {
            alert("Please fill the form")
        }


    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    FirstName: <input type="text" name='firstName' onChange={this.handleOnChange} />
                    LastName: <input type="text" name='lastName' onChange={this.handleOnChange} />
                    Address: <input type="text" name='Address' onChange={this.handleOnChange} />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default Addstudent;