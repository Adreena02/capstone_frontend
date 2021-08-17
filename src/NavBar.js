import Auth from './Auth'
import Search from './Search'
import Header from './Header'
import {useState} from 'react'

function NavBar({handleSearch}) {

    return(
        <div className="NavBar">
            <Auth />
            <Search handleSearch={handleSearch} />
            <Header />
        </div>
    )
}

export default NavBar