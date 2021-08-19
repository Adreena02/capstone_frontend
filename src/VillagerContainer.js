import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers, players, villagers, id}) {
    const [neighbors, setNeighbors] = useState([])

   console.log(players)

    function handleAddToTown(e){

        // let newUser = players.find(player => player.id === e.target.value)
        // console.log(newUser)

        // console.log


        // console.log(id)
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
        .then(data => { 
            console.log(data)
            setNeighbors(data)
        })
    }
 
    return(
        <div>
            <UserVillagers filterVillagers={filterVillagers} />
            <VillagerCards handleAddToTown={handleAddToTown} filterVillagers={filterVillagers}/>
        </div>
        

    )
}

export default VillagerContainer