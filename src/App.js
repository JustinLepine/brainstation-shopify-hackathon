import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AfterSearchPage from "./components/AfterSearchPage/AfterSearchPage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <AfterSearchPage />
      <Switch>{/* <Route path="/" exact component={Hero}> */}</Switch>
      <Footer />
    </Router>
  );
}

export default App;
