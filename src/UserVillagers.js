// import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({showPlayerNeighbors, filterVillagers, neighbors, removeNeighbor, props, showUserVillagers}) {

    const userVillagerArray = showUserVillagers.map((userVillager) => {
        return(
            <Townies
                key = {userVillager.id}
                // moveOut = {moveOut}
                removeNeighbor={removeNeighbor}   //NEED TO MOVE THIS FUNCTION UP A LEVEL
                {...userVillager}
            />
        )
    })

    // console.log(userVillagerArray[1].id)
    
    
    return(
        <div>
            {/* <Villagers /> */}
            {userVillagerArray}
        </div>
    )
}

export default UserVillagers