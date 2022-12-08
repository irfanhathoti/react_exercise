import React, { Component } from "react";
import Notes from "./Notes";
import Action from "./Action";


class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notelist: [
        { "name": 'Irfan' },
        { "name": 'Imran' },
        { "name": 'Anand' }
      ]
    };
  }

  HandleRemove = (index) => {


    let newState = this.state.notelist.filter((lists, value) => {
      return value !== index;
    });
    this.setState({ notelist: newState });
  }

  AddList = (list) => {
    let newState = [...this.state.notelist, list]
    this.setState({ notelist: newState })
  }

  RemoveAll = () => {
    this.setState({ notelist: [] });
  }


  render() {
    return (
      <div>
        <h4>Java Sample Apporach</h4>
        <ol>
          <h6>JSA Notes</h6>

          {
            this.state.notelist.map((CurElement, i) => {
              return (
                <li key={i}>
                  <Notes list={CurElement.name} />
                  <button onClick={() => { this.HandleRemove(i) }}>Remove</button>
                </li>

              )
            })

          }
        </ol>
        {
          <Action name={this.state.list} AddData={this.AddList} Delete={this.RemoveAll} />
        }
      </div>
    );
  }
}

export default NoteApp;