import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers, players, villagers}) {
    const [neighbors, setNeighbors] = useState([])

    console.log

    function handleAddToTown(e){

        let newUser = players.find(player => player.id === e.target.value)

        let id = newUser.id
        console.log(id)
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
 
    return(
        <div>
            <UserVillagers filterVillagers={filterVillagers} />
            <VillagerCards handleAddToTown={handleAddToTown} filterVillagers={filterVillagers}/>
        </div>
        

    )
}

export default VillagerContainer