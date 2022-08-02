import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Cotato</li>
      </ul>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/company">
          <Company />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/newproject">
          <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
