import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions,originals,romance } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title="Action Movies" isSmall/>
      <RowPost url={romance} title="Romance Movies" isSmall/>
    </div>
  );
}

export default App;
