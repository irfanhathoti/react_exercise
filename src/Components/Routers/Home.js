import React, { Component } from 'react'
import AddBook from './AddBook'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BookList: [{
        "Book": "Book1"
      }],
      // List:{},
      flag: true
    }
  }
  AddBook = (List) => {
    let newState = [...this.state.BookList, List]
    console.log(newState);
    this.setState({
      BookList: newState
    })
  }
  
  render() {
    return (
      <div>

        <ul>
          {
            this.state.BookList.map((List, index) => {
              return (
                <li key={index}>
                  {List.Book}
                </li>
              )
            })
          }
        </ul>
        <AddBook AddBook={this.AddBook} />
        <br />
      </div>
    )
  }
}
export default Home
