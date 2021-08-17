import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer({filterVillagers}) {
 
    return(
        <div>
            <UserVillagers />
            <VillagerCards filterVillagers={filterVillagers}/>
        </div>
        

    )
}

export default VillagerContainer