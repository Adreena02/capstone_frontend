import Villagers from "./Villagers"
import Townies from "./Townies"
import { useState, useEffect } from 'react'

function UserVillagers({filterVillagers}) {
 
    return(
        <div>
            <Villagers />
            <Townies />
        </div>
    )
}

export default UserVillagers