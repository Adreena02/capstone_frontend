import UserVillagers from './UserVillagers'
import VillagerCards from './VillagerCards'
import {useEffect, useState} from 'react'

function VillagerContainer() {
    const [villagers, setVillagers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/villagers')
        .then(res => res.json())
        .then(data => setVillagers(data))
    }, [])

    // console.log(villagers)
    return(
        <div>
            <UserVillagers />
            <VillagerCards villagers={villagers}/>
        </div>
        

    )
}

export default VillagerContainer