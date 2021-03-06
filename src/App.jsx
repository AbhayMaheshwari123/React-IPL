import './App.css';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Team from './Components/PlayerCards.jsx';
import Error from './Components/ErrorPage.jsx';
import Cards from './Components/TeamCards';
import Lodr from './Components/loader.jsx';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  return (
    <Router>
        <Navbar />
           <Lodr/>
        <ErrorBoundary>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Cards}  />
            <Route exact path='/team' component ={Cards} />
            <Route exact path='/team/:url' component ={Team} />
            <Route component={Error}/>
          </Switch>
          
        </div>
        </ErrorBoundary>
    </Router>
  );
}

export default App;
