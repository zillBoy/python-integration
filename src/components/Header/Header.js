import React from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'

const Header = ({ page }) => {
    return (
        <div className='header-container'>
            <div>
                <p>Website Name</p>
            </div>
            <div className='header-navbar'>
                <Link className={page === 'home' && 'selected-nav'} to='/home'>Home</Link>
                <Link className={page === 'about' && 'selected-nav'} to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Header
