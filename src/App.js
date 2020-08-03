import React from "react";
// import Home from './pages/home';
// import { BrowserRouter, Route } from 'react-router-dom';
import Painting from "./components/paintings/Painting";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <>
      <Painting />
      <TestComponent />

      {/* <BrowserRouter>
        <Route exact path="/home" component={Home} />
      </BrowserRouter> */}
    </>
  );
}

export default App;
