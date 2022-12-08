import React, { Component } from 'react';

class UpdateStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName:this.props.student.firstName,
            lastName:this.props.student.lastName,
            Address:this.props.student.Address,

         };
    }

    handleOnChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})
     }
 
     handleOnSubmit=(event)=>{ 
 
         event.preventDefault();
         console.log(this.state);
         this.props.addStudent(this.state);
         
     }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                   FirstName: <input type="text" value={this.state.firstName} name='firstName' onChange={this.handleOnChange}/>
                   LastName: <input type="text" value={this.state.lastName} name='lastName'onChange={this.handleOnChange}/>
                   Address: <input type="text" value={this.state.Address} name='Address'onChange={this.handleOnChange}/>
                    <button>Update</button>
                </form>
            </div>
            
        );
    }
}

export default UpdateStudent;