import './App.css';
import Schedule from './components/Schedule';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Medal from './components/Medal';
import Cheer from './components/Cheer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/medal" component={Medal} />
          <Route exact path="/cheers" component={Cheer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
