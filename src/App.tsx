import React, { useState } from "react";

import Title from "./components/Title";
import Slider from "./components/slider";
import Presentation from "./components/Presentation";
import { Waypoint } from "react-waypoint";

import "./App.scss";

function App() {
  const [isTitleRender, setIsTitleRender] = useState(false);
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <div className="overflow-hidden">
      {isTitleRender ? <Slider setActiveTitle={setActiveTitle} /> : <Title />}

      {!isTitleRender && (
        <Waypoint
          onEnter={() => {
            setIsTitleRender(true);
          }}
        >
          <div className="bg-black mt-20 h-20 w-full"></div>
        </Waypoint>
      )}

      {isTitleRender && <Presentation activeSection={activeTitle} />}
    </div>
  );
}

export default App;
