import React from "react";
import "./styles/App.css";
import Home from "./Home";
function App() {
  return (
    <div className="app-container">
      <div className="navbar-container">
          <img className = "society-logo" src="src\assets\eces.jpg" alt=""/>
          <h2 className='organization-name'>ECES</h2>
      </div>
      <Home />
    </div>
  );
}

export default App;
