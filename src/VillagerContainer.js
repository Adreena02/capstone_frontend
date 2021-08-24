// import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
// import {useEffect, useState} from 'react'

function VillagerContainer({deleteVillager, filterVillagers, addUserVillager,players, villagers, playerId, showUserVillagers, setVillagers, addDreamVillager}) {
    
 
    return(
        <div>
            <VillagerCards deleteVillager={deleteVillager} addDreamVillager={addDreamVillager} addUserVillager={addUserVillager} filterVillagers={filterVillagers} playerId={playerId}/>
        </div>

    )
}

export default VillagerContainer

