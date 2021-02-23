import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import PrayerRequest from "./pages/PrayerRequest";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sermons">
            <Sermons />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/prayer-request">
            <PrayerRequest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
