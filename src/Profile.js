import DreamVillagerContainer from './DreamVillagerContainer'
import UserVillagers from './UserVillagers'

function Profile({showUserVillagers}) {
    return(
        <div>
            <h1>My Villagers</h1>
            <UserVillagers showUserVillagers={showUserVillagers} />
            <h1>Dream Villagers</h1>
            <DreamVillagerContainer />
        </div>
    )
}

export default Profile