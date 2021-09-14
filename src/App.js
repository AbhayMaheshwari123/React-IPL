import './App.css';
import Navbar from './Components/Navbar.js';
import Container from './Pages/Container';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import URL from './Helper/Url';
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
              <Container url={URL["chennai-super-kings"]}/>
            </Route>
            <Route path='/team/delhi-capitals' exact>
              <Container url={URL["delhi-capitals"]}/>
            </Route>
            <Route path='/team/kings-xi-punjab' exact>
              <Container url={URL["kings-xi-punjab"]}/>
            </Route>
            <Route path='/team/kolkata-knight-riders' exact>
              <Container url={URL["kolkata-knight-riders"]}/>
            </Route>
            <Route path='/team/mumbai-indians' exact>
              <Container url={URL["mumbai-indians"]}/>
            </Route>
            <Route path='/team/rajasthan-royals' exact>
              <Container url={URL["rajasthan-royals"]}/>
            </Route>
            <Route path='/team/royal-challengers-banglore' exact>
              <Container url={URL["royal-challengers-banglore"]}/>
            </Route>
            <Route path='/team/sunrisers-hyderabad' exact>
              <Container url={URL["sunrisers-hyderabad"]}/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
