import './App.css';
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="center-container"> {/* Container to center the button */}
        <button className="custom-button text-white font-bold py-2 px-4 rounded-full">
          Invest
        </button>
      </div>
    </Router>
  );
}

export default App;
