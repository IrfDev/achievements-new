import React, { useEffect, useState } from "react";
import someScript from "../utils";
import HeroTitleItem from "./HeroTitleItem";

type Props = {
  setActiveTitle: any;
};

const sections = [
  {
    name: "Frontline",
    image: "/images/headers/dubai.png",
  },
  {
    name: "Share",
    image: "/images/headers/share.png",
  },
  {
    name: "Register",
    image: "/images/headers/register.png",
  },
  {
    name: "Posts & comments",
    image: "/images/headers/comment.png",
  },

  {
    name: "What's next?",
    image: "/images/headers/whats-next.png",
  },
];

const SliderComponent = ({ setActiveTitle }: Props) => {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    if (!wasLoaded) {
      setTimeout(() => {
        someScript(
          sections.map(({ image }) => image),
          setActiveTitle
        );

        setWasLoaded(true);
      }, 100);
    }
  }, []);

  return (
    <main className="bg-black h-screen w-screen ">
      <span className="logo">
        <h2 className="text-base font-bold">Irving Suarez</h2>
        <h2 className="text-sm">Achievements and what's next?</h2>
      </span>
      <div className="car-text">
        <ul>
          {sections.map((section, index) => (
            <HeroTitleItem
              setActiveTitle={setActiveTitle}
              key={index}
              index={index}
              name={section.name}
            />
          ))}
        </ul>
      </div>
      <div className="car-image"></div>
    </main>
  );
};

export default SliderComponent;
