import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers, handleAddToTown}) {
 
    return(
        <div>
            <UserVillagers filterVillagers={filterVillagers}/>
            <VillagerCards handleAddToTown={handleAddToTown} filterVillagers={filterVillagers}/>
        </div>
        

    )
}

export default VillagerContainer