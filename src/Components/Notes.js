import React, { Component } from 'react';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                {/* get a list form noteapp using props  */}
                <span>{this.props.list}</span>

            </>

        );
    }
}

export default Notes;