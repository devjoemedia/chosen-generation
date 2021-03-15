import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import PrayerRequest from "./pages/PrayerRequest";
import AdminPrayerRequest from "./admin/AdminPrayerRequest";
import Contacts from "./pages/Contacts";
import Sermon from "./pages/Sermon";
import Dashboard from "./admin/Dashboard";
import AddSermon from "./admin/sermons/AddSermon";
import AllSermons from "./admin/sermons/AllSermons";
import EditSermon from "./admin/sermons/EditSermon";
import AddEvent from "./admin/events/AddEvent";
import EditEvent from "./admin/events/EditEvent";
import AdminEvents from "./admin/events/AdminEvents";
import Messages from "./admin/Messages";
import PrayerRequestSingle from "./admin/PrayerRequestSingle";
import MessageSingle from "./admin/MessageSingle";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/sermons/:id">
            <Navbar />
            <Sermon />
            <Footer />
          </Route>
          <Route path="/sermons">
            <Navbar />
            <Sermons />
            <Footer />
          </Route>
          <Route path="/events">
            <Navbar />
            <Events />
            <Footer />
          </Route>
          <Route path="/contacts">
            <Navbar />
            <Contacts />
            <Footer />
          </Route>
          <Route path="/prayer-request">
            <Navbar />
            <PrayerRequest />
            <Footer />
          </Route>
          <Route path="/admin/events/1/edit">
            <EditEvent />
          </Route>
          <Route path="/admin/events/add">
            <AddEvent />
          </Route>
          <Route path="/admin/events">
            <AdminEvents />
          </Route>
          <Route path="/admin/sermons/1/edit">
            <EditSermon />
          </Route>
          <Route path="/admin/sermons/add">
            <AddSermon />
          </Route>
          <Route path="/admin/sermons">
            <AllSermons />
          </Route>
          <Route path="/admin/prayer-request/1">
            <PrayerRequestSingle />
          </Route>
          <Route path="/admin/prayer-request">
            <AdminPrayerRequest />
          </Route>
          <Route path="/admin/messages/1">
            <MessageSingle />
          </Route>
          <Route path="/admin/messages">
            <Messages />
          </Route>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
