import Auth from './Auth'
import Search from './Search'
import {NavLink} from 'react-router-dom'
// import Header from './Header'
import {useState} from 'react'


function NavBar({handleSearch, setPlayers, users, currentUser, userNow, handleStretchSearch, showPlayerNeighbors}) {

    return(
        <div className="NavBar">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/add-new-villager'>Villager Form</NavLink>
            <NavLink to='/auth'>Sign Up</NavLink>
            
            <Search handleSearch={handleSearch} handleStretchSearch={handleStretchSearch} />
           
        </div>
    )
}

export default NavBar