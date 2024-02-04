import React from 'react'
import './navbar.css'
import logo from '../../images/Fill 213.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <h1 className='title'>my travel journal</h1>
        </div>
    )
}

export default Navbar