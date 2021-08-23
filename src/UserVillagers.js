// import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({showPlayerNeighbors, filterVillagers, neighbors, removeNeighbor, props, showUserVillagers}) {

    // const {id, gender, name, birthday, species, img_url} = props

    // const {id, gender, name, birthday, species, img_url} = villagers

    const userVillagerArray = showUserVillagers.map((userVillager) => {
        return(
            <Townies
                key = {userVillager.id}
                // moveOut = {moveOut}
                // removeNeighbor={removeNeighbor}   //NEED TO MOVE THIS FUNCTION UP A LEVEL
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