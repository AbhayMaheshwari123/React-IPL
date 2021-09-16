import './App.css';
import Navbar from './Components/Navbar.jsx';
import Container from './Pages/CardContainer.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Team from './Components/PlayerCards.jsx';
import Error from './Components/ErrorPage.jsx';
function App() {
  return (
    <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Container}  />
            <Route exact path='/team' component ={Container} />
            <Route exact path='/team/:url' component ={Team} />
            <Route component={Error}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
