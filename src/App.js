// import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        {/* <Link to ="/home">Homepage</Link> */}
        <Switch>
          <Route exact path ='/home'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
