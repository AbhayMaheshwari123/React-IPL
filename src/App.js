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
            <Route path='/teams/chennai-super-kings' exact>
              CSK
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
