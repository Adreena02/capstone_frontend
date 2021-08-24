import DreamVillagerContainer from './DreamVillagerContainer'
import UserVillagers from './UserVillagers'

function Profile({showUserVillagers, dreamVillagers, removeNeighbor}) {
    return(
        <div>
            <h1>My Villagers</h1>
            <UserVillagers showUserVillagers={showUserVillagers} removeNeighbor={removeNeighbor}/>
            <h1>Dream Villagers</h1>
            <DreamVillagerContainer dreamVillagers={dreamVillagers}/>
        </div>
    )
}

export default Profile