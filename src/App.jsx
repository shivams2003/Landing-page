import React from "react";
import "./App.css";
import Home from "./Home";
import Achievements from "./Achievements";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Home />
      {/* <Achievements /> */}
      <UpcomingEvents
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
