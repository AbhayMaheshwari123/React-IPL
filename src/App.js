import './App.css';
import Navbar from './Components/Navbar.jsx';
import Container from './Pages/CardContainer.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import URL from './Helper/Url.jsx';
import Team from './Components/PlayerCards.jsx';
import Error from './Components/ErrorPage.jsx';
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
              <Team url={URL["chennai-super-kings"]} teamname={"chennai-super-kings"}/>
            </Route>
            <Route path='/team/delhi-capitals' exact>
              <Team url={URL["delhi-capitals"]} teamname={"delhi-capitals"}/>
            </Route>
            <Route path='/team/kings-xi-punjab' exact>
              <Team url={URL["kings-xi-punjab"]} teamname={"kings-xi-punjab"}/>
            </Route>
            <Route path='/team/kolkata-knight-riders' exact>
              <Team url={URL["kolkata-knight-riders"]} teamname={"kolkata-knight-riders"}/>
            </Route>
            <Route path='/team/mumbai-indians' exact>
              <Team url={URL["mumbai-indians"]} teamname={"mumbai-indians"}/>
            </Route>
            <Route path='/team/rajasthan-royals' exact>
              <Team url={URL["rajasthan-royals"]} teamname={"rajasthan-royals"}/>
            </Route>
            <Route path='/team/royal-challengers-bangalore' exact>
              <Team url={URL["royal-challengers-bangalore"]} teamname={"royal-challengers-bangalore"}/>
            </Route>
            <Route path='/team/sunrisers-hyderabad' exact>
              <Team url={URL["sunrisers-hyderabad"]} teamname={"sunrisers-hyderabad"}/>
            </Route>
            <Route component={Error}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
