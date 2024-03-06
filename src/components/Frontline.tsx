/* eslint-disable */
import React, { useEffect } from "react";

type Props = {};

const Frontline = (props: Props) => {
  return (
    <>
      <div className="class flex-col space-y-5 flex items-center pt-44">
        <h1 className="text-center text-4xl text-white">Map v1</h1>
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/frontline/0.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/frontline/1.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/frontline/2.png"
          alt=""
        />
        {/* <img
          className="w-2/3 h-full rounded-xl"
          src="/images/frontline/3.png"
          alt=""
        /> */}
      </div>
    </>
  );
};

export default Frontline;
