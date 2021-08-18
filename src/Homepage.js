// import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Profile from './Profile'
import { useState, useEffect } from 'react'

function Homepage() {
    const [villagers, setVillagers] = useState([])
    const [search, setSearch] = useState("")
    const [neighbors, setNeighbors] = useState([])
    const [players, setPlayers] = useState([])
    const [userNow, setUserNow] = useState("")


    useEffect(() => {
        fetch('http://localhost:3000/villagers')
        .then(res => res.json())
        .then(data => setVillagers(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/players')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    
    

    function handleSearch(e){
        setSearch(e.target.value)
    }

    const filterVillagers = villagers.filter(villager => {
        return (villager.name.toLowerCase().includes(search.toLowerCase()))
        ||
        (villager.species.toLowerCase().includes(search.toLowerCase()))
    })
    // console.log(players)

    let users = players.map(player => <option key = {player.id} value={player.user_name}> {player.user_name} </option>)

    // console.log(users)

    function currentUser(e){
        let selectedUser = players.find(player => player.user_name === e.target.value)
        setUserNow(selectedUser)
    }

    function handleAddToTown(e){

        let id = userNow.id
        let neighborObj = {
            villager_id: villagers.id,
            player_id: players.id
        }
    
        fetch(`http://localhost:3000/players/${id}/townies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(neighborObj)
            })
        .then(res => res.json())
        .then(data => setNeighbors(data))
    }

    // console.log(villagers)
    return(
        <div>
        <NavBar handleSearch={handleSearch} setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
        <VillagerContainer handleAddToTown={handleAddToTown} filterVillagers={filterVillagers}/>
        <Profile />
        </div>
        

    )
}

export default Homepage



