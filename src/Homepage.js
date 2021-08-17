// import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Profile from './Profile'
import { useState, useEffect } from 'react'

function Homepage() {
    const [villagers, setVillagers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/villagers')
        .then(res => res.json())
        .then(data => setVillagers(data))
    }, [])


    function handleSearch(e){
        setSearch(e.target.value)
    }

    const filterVillagers = villagers.filter(villager => {
        return (villager.name.toLowerCase().includes(search.toLowerCase()))
        ||
        (villager.species.toLowerCase().includes(search.toLowerCase()))
    })

    // console.log(villagers)
    return(
        <div>
        <NavBar handleSearch={handleSearch}/>
        <VillagerContainer filterVillagers={filterVillagers}/>
        <Profile />
        </div>
        

    )
}

export default Homepage