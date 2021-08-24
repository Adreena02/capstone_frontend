// import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({showPlayerNeighbors, filterVillagers, neighbors, removeNeighbor, props, showUserVillagers, handleDeleteClick}) {

    const userVillagerArray = showUserVillagers.map((userVillager) => {
        return(
            <Townies
                key = {userVillager.id}
                handleDeleteClick={handleDeleteClick}
                removeNeighbor={removeNeighbor}
                {...userVillager}
            />
        )
    })

    return(
        <div>
            {userVillagerArray}
        </div>
    )
}

export default UserVillagers