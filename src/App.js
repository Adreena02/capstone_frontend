// import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Footer from './Footer'
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <div className="app" style={{backgroundImage: "url(/background.png)", backgroundRepeat: "repeat-n"}}>
        <Homepage />
        <Footer />
      </div>
    )
  }
  
  export default App;
