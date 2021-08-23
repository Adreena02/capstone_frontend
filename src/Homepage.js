import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Auth from './Auth'
import Login from './Login'
import Profile from './Profile'
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

    function addUserVillager(villager){
        setUserVillagers([...showUserVillagers, villager])

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

  
    function addNewVillager(){
        let villagerObj = {
            name: villagers.name,
            gender: villagers.gender,
            species: villagers.species,
            birthday: villagers.birthday,
        }


    }
   
   
    return(
        <div className="homepage">
        <NavBar handleSearch={handleSearch} setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
        <Login setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
        <Switch>
            <Route exact path='/profile'>
                <Profile showUserVillagers={showUserVillagers}  />
            </Route>
            <Route exact path='/home' >
                <VillagerContainer filterVillagers={filterVillagers} currentUser={currentUser} players={players} villagers={villagers} playerId={playerId} addUserVillager={addUserVillager}/>
            </Route>
            <Route exact path='/auth' >
                <Auth setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/>
            </Route>
        </Switch>
        </div>
        )
    }
    
    export default Homepage
    
    
    
    
            // let id = players.id
            // fetch(`http://localhost:3000/players/${id}/townies`)
            // .then(res => res.json())
            // .then(data => console.log(data))
        
        // function removeFromTown(e){
        //     if(setUserNow.id){
        //         let neighborId = 
        //     }
    
        //     fetch(`http://localhost:3000/players/${id}/townies`, {
        //         method: "DELETE"
        //     })
        // }
    
    
        // function handleAddToTown(e){
    
        //     let id = players.id
        //     console.log(id)
        //     let neighborObj = {
        //         villager_id: villagers.id,
        //         player_id: players.id
        //     }
        
        //     fetch(`http://localhost:3000/players/${id}/townies`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(neighborObj)
        //         })
        //     .then(res => res.json())
        //     .then(data => setNeighbors(data))
        // }
    
        // console.log(villagers)
