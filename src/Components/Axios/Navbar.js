import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <Link to='/'>DashBoard</Link>
                <Link to='/AddData'>AddData</Link>
            </div>
            <h1> Java Sample Approuch </h1>
            <p>Book Management Application</p>
        </div>
    )
}

export default Navbar