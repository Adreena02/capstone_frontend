import Auth from './Auth'
import Search from './Search'
import Header from './Header'
import {useState} from 'react'

function NavBar() {

    const [search, setSearch] = useState("")

    function handleSearch(e){
        setSearch(e.target.value)
    }

    return(
        <div className="NavBar">
            <Auth />
            <Search handleSearch={handleSearch} />
            <Header />
        </div>
    )
}

export default NavBar