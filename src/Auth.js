import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function Auth() {
    return(
        <div>
        <Switch>
          <Route path='/Login' component={()=> <Login />}/> 
          <Route path='/Signup' component={()=> <Signup />}/> 
        </Switch>
       
        </div>
    )
}

export default Auth