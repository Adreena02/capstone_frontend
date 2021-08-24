import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Auth from './Auth'
import Login from './Login'
import Profile from './Profile'
import VillagerForm from './VillagerForm'
import { useState, useEffect } from 'react'

function Homepage() {
    const [villagers, setVillagers] = useState([])
    const [search, setSearch] = useState("")
    const [neighbors, setNeighbors] = useState([])
    const [players, setPlayers] = useState([])
    const [userNow, setUserNow] = useState("")
    const [playerId, setPlayerId] = useState("")
    const [stretchSearch, setStretchSearch] = useState("")
    const [showUserVillagers, setUserVillagers] = useState([])
    const [dreamVillagers, setDreamVillagers] = useState([])

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

    useEffect(()=> {
        fetch(`http://localhost:3000/players/${playerId}/townies`)
        .then(res => res.json())
        .then(data => {
            if (data === null){
                setUserVillagers([])
            }else {
                setUserVillagers(data)
            }
        })
    }, [playerId])

    useEffect(() => {
        fetch(`http://localhost:3000/players/${playerId}/dreamies`)
        .then(res => res.json())
        // .then(console.log)
        .then(data => {
            if (data === null){
                setDreamVillagers([])
            } else {
                setDreamVillagers(data)
            }
        })
    }, [playerId])

    

    function addUserVillager(villager){
        setUserVillagers([...showUserVillagers, villager])
    }

    function addDreamVillager(villager){
        setDreamVillagers([...dreamVillagers, villager])
    }

    function handleSearch(e){
        return (
            setSearch(e.target.value) ||
            setStretchSearch(e.target.value)
        )
    }

    const filterVillagers = villagers.filter(villager => {
        return (villager.name.toLowerCase().includes(search.toLowerCase()))
        ||
        (villager.species.toLowerCase().includes(search.toLowerCase()))
        ||
        (villager.birthday.toLowerCase().includes(search.toLowerCase()))
        ||
        (villager.gender.toLowerCase().includes(search.toLowerCase()))
    })

    let users = players.map(player => 
    <option key = {player.id} value={player.user_name}> {player.user_name} </option>)

    function currentUser(e){
        let selectedUser = players.find(player => player.user_name === e.target.value)
        setUserNow(selectedUser.user_name)
        setPlayerId(selectedUser.id)
    }

  
   


    // console.log(filterVillagers)
    // function moveOut(filterVillagers){
    //     const updatedNeighbors = neighbors.filter((neighbor) => {
    //         return neighbor.id !== filterVillagers
    //     })

    //     setNeighbors(updatedNeighbors)
    // }
    // console.log(players.id)
    function removeNeighbor(e) {
        if (playerId.id) {
            let neighborId = neighbors.find(neighbor => neighbor.player_id === playerId.id).id
    
            fetch(`http://localhost:3000/user_villagers/${neighborId}`, {
                method: 'DELETE'
            })
            .then(console.log)
        }
        // moveOut(filterVillagers.id)
}  



   
   
    return(
        <div className="homepage">
        <NavBar handleSearch={handleSearch} setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
        <Login setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
        <Switch>
            <Route exact path='/profile'>
            <Profile showUserVillagers={showUserVillagers} dreamVillagers={dreamVillagers} removeNeighbor={removeNeighbor}/>
            </Route>
            <Route exact path='/home' >
                <VillagerContainer addDreamVillager={addDreamVillager} filterVillagers={filterVillagers} currentUser={currentUser} players={players} villagers={villagers} playerId={playerId} addUserVillager={addUserVillager}/>
            </Route>
            <Route exact path='/add-new-villager'>
                <VillagerForm villagers={villagers}/>
            </Route>
            <Route exact path='/auth' >
                <Auth setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
            </Route>
        </Switch>
        </div>
        )
    }
    
    export default Homepage
