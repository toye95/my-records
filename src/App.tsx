import React from 'react';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Routes from './Routes';

function App() {

  return (
      <Router>
          <Routes />  
      </Router>
  );
}

export default App;
