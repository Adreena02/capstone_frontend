import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({filterVillagers, neighbors}) {

    const neighborArray = neighbors.map((neighbor) => {
        return(
            <Townies 
            key = {neighborArray.id}
            {...neighborArray}/>
            )
        })
    
    
    return(
        <div>
            <Villagers />
            {neighborArray}
        </div>
    )
}

export default UserVillagers