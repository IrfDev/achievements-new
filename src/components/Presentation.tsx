import React, { useMemo } from "react";
import Frontline from "./Frontline";
import Thanks from "./Thanks";
import Share from "./Share";
import Register from "./Register";
import Comments from "./comments";

type Props = {
  activeSection: number;
};

const Presentation = ({ activeSection }: Props) => {
  let activeComponent = useMemo(() => {
    switch (activeSection) {
      case 3:
        return <Comments />;
      case 2:
        return <Register />;
      case 1:
        return <Share />;
      case 4:
        return <Thanks />;
      case 0:
      default:
        return <Frontline />;
    }
  }, [activeSection]);

  return <section id="section-body">{activeComponent}</section>;
};

export default Presentation;
