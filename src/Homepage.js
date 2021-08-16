import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VillagerContainer from './VillagerContainer'
import Profile from './Profile'

function Homepage() {
    return(
        <div>
        <NavBar />
        <VillagerContainer />
        <Switch>
          <Route path='/Profile' component={()=>  <Profile />}/>
        </Switch>

        </div>
        

    )
}

export default Homepage