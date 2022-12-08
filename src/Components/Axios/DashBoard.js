import React, { Component } from 'react'
import DataService from '../../Services/DataService'

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        DataService.getDataService().then((res) => {
            this.setState({
                users: res.data
            })
            console.log(this.state.users)
        })
    }
    handleRemove(id) {

        DataService.deleteDataService(id).then(res => {

            this.setState({

                users: this.state.users.filter(data => data.id !== id)

            });
        })

    }

    render() {
        return (
            <div>
                {
                    this.state.users.map((data, i) => {
                        return (
                            <div key={i}>
                                <div>
                                    <b>Author: </b>
                                    {data.author}
                                </div>
                                <p>
                                    <b>Title:</b>
                                    {
                                        data.title
                                    }
                                </p>
                                <p>
                                    description:{
                                        data.description
                                    }
                                </p>
                                <p>
                                    Date :<small>
                                        {
                                            data.date
                                        }
                                    </small>
                                </p>

                                <button onClick={() => { this.handleRemove(data.id) }}> Remove  </button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default DashBoard
