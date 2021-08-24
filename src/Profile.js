import DreamVillagerContainer from './DreamVillagerContainer'
import UserVillagers from './UserVillagers'
import './Profile.css'

function Profile({showUserVillagers, dreamVillagers, removeNeighbor, handleDeleteClick}) {
    return(
        <div>
            <h1 className="profile-headers">My Villagers</h1>
            <UserVillagers showUserVillagers={showUserVillagers} handleDeleteClick={handleDeleteClick} removeNeighbor={removeNeighbor}/>
            <h1 className="profile-headers">Dream Villagers</h1>
            <DreamVillagerContainer dreamVillagers={dreamVillagers}/>
        </div>
    )
}

export default Profile