import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'>
          <h1>BeCultured</h1>
        </Link>
        <div className="header__nav">
            <Link to='/myScore'>MyScore</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Header