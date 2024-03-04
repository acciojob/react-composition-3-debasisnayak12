import React from "react";
import './../styles/App.css';
import FirstTooltip from "./FirstTooltip";
import SecondTooltip from "./SecondTooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <FirstTooltip text="This is tooltip">
          <h2>Hover over me</h2>
        </FirstTooltip>
        <hr />
        <SecondTooltip text="This is another tooltip">
          <p>Hover over me to see another tooltip</p>
        </SecondTooltip>
    </div>
  )
}

export default App;
