import './App.css';
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="left-container"> {/* Container to center the button */}
        <button className="custom-button text-white font-bold py-2 px-4 rounded-full">
          Invest
        </button>
      </div>
      <ToTopButton />

                {/* Hero Section */}
                <div className="bg-blue-500 text-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Using Blockchain for Transparency
                        </h1>
                        <p className="text-lg mb-8">
                            Support our cause by donating with cryptocurrency on
                            the Solana blockchain. Ensure transparency with
                            every donation.
                        </p>
                        <button
                            //onClick={() => navigate("/donate")}
                            className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
                        >
                            Donate Now
                        </button>
                    </div>
                </div>
      <Table />
    </Router>
  );
}

export default App;
