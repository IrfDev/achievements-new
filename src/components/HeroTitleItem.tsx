import React from "react";

type Props = {
  name: string;
  index: number;
  setActiveTitle: any;
};

const HeroTitleItem = ({ name, index, setActiveTitle }: Props) => {
  const handleChange = (event: any) => {
    console.log("event", event);
    if (event.target.checked) {
      setActiveTitle(index);
    }
  };
  return (
    <li className="cursor-pointer">
      <input
        type="radio"
        name="section"
        value={index}
        defaultChecked={index === 0}
        onChange={handleChange}
        onInput={handleChange}
      />
      <label className="block cursor-pointer uppercase">{name}</label>
    </li>
  );
};

export default HeroTitleItem;
