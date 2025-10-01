import React from 'react';

import VotingApp from "./assets/components/VotingApp" // Make sure the path is correct

function App() {
  return (
    <div className="App">
      {/* The VotingApp component, which contains all the 
        logic for the voting practice app, is rendered here.
      */}
      <VotingApp /> 
    </div>
  );
}

export default App;