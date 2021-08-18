import Auth from './Auth'
import Search from './Search'
// import Header from './Header'
import {useState} from 'react'

function NavBar({handleSearch, setPlayers, users, currentUser, userNow}) {

    return(
        <div className="NavBar">
            <button>My Villagers</button>
            <Auth setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
            <Search handleSearch={handleSearch} />
           
        </div>
    )
}

export default NavBar