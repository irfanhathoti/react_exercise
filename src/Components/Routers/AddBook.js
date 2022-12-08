import React, { Component } from 'react'

class AddBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      book:undefined
    }
  }

  HandleInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }

  HandleSubmit = (event) =>{
    event.preventDefault()
    this.props.AddBook(this.state)

  }
  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <input type="text" name='Book' value={this.state.book} onChange = {this.HandleInput}  placeholder='Please Enter the Book Name ' />
          <button type="submit">Add</button>
        </form>
          
      </div>
    )
  }
}

export default AddBook
