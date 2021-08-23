// import { Route, Switch } from 'react-router-dom'
// import Login from './Login'
import Signup from './Signup'

function Auth({setPlayers, users, currentUser, userNow}) {
    return(
        <div>
           {/* <Login setPlayers={setPlayers} users={users} currentUser={currentUser} userNow={userNow}/> */}
           <Signup />
        </div>
    )
}

export default Auth