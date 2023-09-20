import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
