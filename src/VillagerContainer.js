import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers, players, villagers, playerId, stretchFilter}) {
    const [neighbors, setNeighbors] = useState([])

    function handleAddToTown(e){
        let neighborObj = {
            villager_id: villagers.id,
            player_id: players.id
        }
    
        fetch(`http://localhost:3000/players/${playerId}/townies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(neighborObj)
            })
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            setNeighbors(data)
        })
    }

    

    function moveOut(e){

    }
 
    return(
        <div>
            <UserVillagers stretchFilter={stretchFilter} filterVillagers={filterVillagers} neighbors={neighbors}/>
            <VillagerCards handleAddToTown={handleAddToTown} stretchFilter={stretchFilter} filterVillagers={filterVillagers}/>
        </div>
        

    )
}

export default VillagerContainer