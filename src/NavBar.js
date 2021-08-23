import Auth from './Auth'
import Search from './Search'
// import Header from './Header'
import {useState} from 'react'

function NavBar({handleSearch, setPlayers, users, currentUser, userNow, handleStretchSearch}) {

    return(
        <div className="NavBar">
            <button>My Villagers</button>
            <Auth setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
            <Search handleSearch={handleSearch} handleStretchSearch={handleStretchSearch} />
           
        </div>
    )
}

export default NavBar