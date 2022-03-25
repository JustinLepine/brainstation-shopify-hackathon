import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import AfterSearchPage from "./components/AfterSearchPage/AfterSearchPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={AfterSearchPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
