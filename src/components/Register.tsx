/* eslint-disable */
import React, { useEffect } from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <>
      <div className="class flex-col space-y-5 flex items-center pt-44">
        <h1 className="text-center text-4xl text-white">Group chat</h1>
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/register/0.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/register/1.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/register/2.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/register/3.png"
          alt=""
        />
        {/* <img
          className="w-2/3 h-full rounded-xl"
          src="/images/register/4.png"
          alt=""
        /> */}
      </div>
    </>
  );
};

export default Register;
