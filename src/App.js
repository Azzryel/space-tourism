import './App.scss';
import HomePage from "./components/HomePage";
import NavMenu from './components/NavMenu';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import data from "./data.json";

function App() {

  const destinations = data.destinations
  const crew = data.crew
  const technology = data.technology

  return (
    <div className="App font-face-bfr">
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/destination" element={<Destination destinations={ destinations } />} />
          <Route exact path="/crew" element={<Crew crew={ crew } />} />
          <Route exact path="/technology" element={<Technology technology={ technology } />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
