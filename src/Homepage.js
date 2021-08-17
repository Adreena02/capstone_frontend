// import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Profile from './Profile'

function Homepage() {
    return(
        <div>
        <NavBar />
        <VillagerContainer />
        <Profile />
        </div>
        

    )
}

export default Homepage