import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class Header extends Component {

    handleClick(e, page) {
        e.preventDefault()
        this.props.onSetPage(page)
    }

    render() {
        return (
            <div className='header border-bottom border-white flex auto-center p-3'>
                <NavLink exact to='/'><span>Home</span></NavLink>
                <NavLink exact to='/contacts'><span>Contacts</span></NavLink>
                <NavLink exact to='/statistics'><span>Statistics</span></NavLink>
            </div>
        )
    }
}

export default Header