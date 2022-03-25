import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path="/" exact component={Hero}> */}
      </Switch>
    </Router>

  );
}

export default App;
