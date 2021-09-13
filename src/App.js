import './App.css';
import Navbar from './Components/Navbar.js';
import Container from './Pages/Container';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path='/' exact>
              <Container />
            </Route>
            <Route path='/team/chennai-super-kings' exact>
              CSK
            </Route>
            <Route path='/team/delhi-capitals' exact>
              DC
            </Route>
            <Route path='/team/kings-xi-punjab' exact>
              KXIP
            </Route>
            <Route path='/team/kolkata-knight-riders' exact>
              KKR
            </Route>
            <Route path='/team/mumbai-indians' exact>
              MI
            </Route>
            <Route path='/team/rajasthan-royals' exact>
              RR
            </Route>
            <Route path='/team/royal-challengers-banglore' exact>
              RCB
            </Route>
            <Route path='/team/sunrisers-hyderabad' exact>
              SRH
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
