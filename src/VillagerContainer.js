// import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers, addUserVillager,players, villagers, playerId, stretchFilter, showUserVillagers, setVillagers}) {
    const [neighbors, setNeighbors] = useState([])

    // function handleAddToTown(e){

    //     const newVillagers = filterVillagers.map(villagerId => {
    //         return(
    //             <VillagerCards 
    //                 key = {villagerId.id}
    //                 {...villagerId} />

    //         )
    //     })

    //     let neighborObj = {
    //         villager_id: villagers.id,
    //         player_id: playerId
    //     }
    
    //     fetch(`http://localhost:3000/user_villagers/${playerId}/townies`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(neighborObj)
    //         })
    //     .then(res => res.json())
    //     .then(newNeighbor => { 
    //         // console.log(data)
    //         setNeighbors(newNeighbor)
    //     })
    // }

    function moveOut(villagerId){
        const updatedNeighbors = neighbors.filter((neighbor) => {
            return neighbor.id !== villagerId
        })

        setNeighbors(updatedNeighbors)
    }

    function removeNeighbor(e) {
        if (playerId.id) {
            let neighborId = neighbors.find(neighbor => neighbor.player_id === playerId.id).id
    
            fetch(`http://localhost:3000/user_villagers/${neighborId}`, {
                method: 'DELETE'
            })
        }
        moveOut(filterVillagers.id)
}  

    function showPlayerNeighbors(newNeighbor){
        let newVillagerArray = [newNeighbor, ...villagers]
        setVillagers(newVillagerArray)
    }


 
    return(
        <div>
            {/* <UserVillagers showUserVillagers={showUserVillagers} showPlayerNeighbors={showPlayerNeighbors} stretchFilter={stretchFilter} filterVillagers={filterVillagers} neighbors={neighbors} removeNeighbor={removeNeighbor}/> */}
            <VillagerCards addUserVillager={addUserVillager} removeNeighbor={removeNeighbor} moveOut={moveOut} stretchFilter={stretchFilter} filterVillagers={filterVillagers} playerId={playerId}/>
        </div>
        

    )
}

export default VillagerContainer

// const removeFave = () => {
    // if (changeUser.id){
    //     let likeId = likes.find(like => like.user_id === changeUser.id).id

    //     fetch (`http://localhost:3000/likes/${likeId}`, {
    //         method: 'DELETE',
    //     })
    // }

    // deleteFromFaves(id)
    
// }

