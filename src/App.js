import './App.css';
import Navbar from './Components/Navbar.js';
import Container from './Pages/Container';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import URL from './Helper/Url';
import Team from './Components/Team';
import Notfound from './Components/Notfound';
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
              <Team url={URL["chennai-super-kings"]}/>
            </Route>
            <Route path='/team/delhi-capitals' exact>
              <Team url={URL["delhi-capitals"]}/>
            </Route>
            <Route path='/team/kings-xi-punjab' exact>
              <Team url={URL["kings-xi-punjab"]}/>
            </Route>
            <Route path='/team/kolkata-knight-riders' exact>
              <Team url={URL["kolkata-knight-riders"]}/>
            </Route>
            <Route path='/team/mumbai-indians' exact>
              <Team url={URL["mumbai-indians"]}/>
            </Route>
            <Route path='/team/rajasthan-royals' exact>
              <Team url={URL["rajasthan-royals"]}/>
            </Route>
            <Route path='/team/royal-challengers-banglore' exact>
              <Team url={URL["royal-challengers-banglore"]}/>
            </Route>
            <Route path='/team/sunrisers-hyderabad' exact>
              <Team url={URL["sunrisers-hyderabad"]}/>
            </Route>
            <Route component={Notfound}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
