import './App.css';
import Home from './Home';
import Today from './Today';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/today" component={Today} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
