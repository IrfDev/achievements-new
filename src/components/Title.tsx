import React, { useEffect } from "react";

import textAnimation from "../utils/textAnimation";

type Props = {};

const Title = (props: Props) => {
  useEffect(() => {
    let render = textAnimation();

    render();

    return () => {};
  }, []);

  return (
    <div id="title-text" className="h-screen">
      Title
    </div>
  );
};

export default Title;
