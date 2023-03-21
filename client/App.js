import React from "react";

const App = () => {
  console.log("PROCESS", process.env.JWT);
  return (
    <div>
      <h1>THIS IS THE APP</h1>
    </div>
  );
};

export default App;
