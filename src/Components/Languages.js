import React, { Component } from "react";

class Languages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriess: ["Java Core", "Spring Boot", "Angular JS", "React JS", "Integration"]
        }

    }
    handleAdd() {
        if (this.newText.value !== "") {
            var lists = [...this.state.categoriess];
            lists.push(this.newText.value);
            this.setState({ categoriess: [...lists] });
        }
        else{
            alert(" please  fill the form")
        }
    }
    delete_All() {
        this.setState({ categoriess: [] });
    }

    render() {
        return (
            <div>
                <form >
                    <h1>JAVA SAMPLE APPROACH</h1>
                    <h4>Categories:</h4>
                    {this.state.categoriess.map((category, index) => {
                        return (
                            <div key={index}>

                                <h4>{index + 1}.{category}</h4>
                            </div>
                        )
                    })
                    }
                    <input type="text" ref={(data) => { this.newText = data }} autocomplete="off" id='inp' />
                    <button type="button" onClick={this.handleAdd.bind(this)}>Add</button>
                </form>
                <br/>
                <button type="button" onClick={this.delete_All.bind(this)}>Delete All</button>
            </div>
        );
    }
}
export default Languages