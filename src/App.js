import React from 'react';
// import Home from './pages/home';
// import { BrowserRouter, Route } from 'react-router-dom';
import Painting from './components/paintings/Painting';

function App() {
  return (
    <>
      <div className="container">
        <ul>
          <Painting />
        </ul>
      </div>
      {/* <BrowserRouter>
        <Route exact path="/home" component={Home} />
      </BrowserRouter> */}
    </>
  );
}

export default App;
