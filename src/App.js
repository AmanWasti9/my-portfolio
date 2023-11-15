import "./App.css";
import AboutMePage from "./Components/AboutMe/AboutMePage";
import Homepage from "./Components/HomePage/Homepage";

import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDetails from "./Components/Projects/ProjectDetails";

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/project" element={<ProjectDetails  />} />
        </Routes>
        <br /><br />
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
