import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import ToTopButton from "./components/ToTopButton.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <ToTopButton />
      <h1>
        DASHBOARD
      </h1>
      <div className="left-container"> {/* Container to center the button */}
          <button className="custom-button text-white font-bold py-2 px-4 rounded-full">
            Invest
          </button>
      </div>
      <div className="right-container"> {/* Container to position the pie graph */}
          <img src={process.env.PUBLIC_URL + '/piegraph.png'} alt="Pie Graph" className="w-30 h-30"/>
      </div>
      <div class="flex-container">
        <div class="flex-child magenta">
          Flex Column 1
        </div>
        <div class="flex-child green">
          Flex Column 2
        </div>
        </div>
      <Table />
      {/* Hero Section */}
      <div className="fintech-color text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                  Past Performance
              </h1>
              <p className="text-lg mb-8">
                  Try our Robo Advisor which analyzes market stock data and factors in your individual risk preference. 
              </p>
              <button
                  //onClick={() => navigate("/donate")}
                  className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
              >
                  Take the risk questionaire. 
              </button>
          </div>
      </div>
      
    </Router>
  );
}

export default App;
