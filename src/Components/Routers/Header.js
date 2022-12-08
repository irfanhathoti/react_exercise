import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">DashBoard</Link>
        <Link className='navbar-brand' to="/Contact"> Contact me</Link>
        <Link className='navbar-brand' to="/About" >About</Link>
      </div>
    </nav>
  )
}
export default Header