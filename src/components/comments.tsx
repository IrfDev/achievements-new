/* eslint-disable */
import React, { useEffect } from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <>
      <div className="class flex-col  space-y-5 flex items-center pt-44">
        <h1 className="text-center text-4xl text-white">Escalation</h1>

        <div className="flex flex-col w-full justify-center items-center space-y-5 py-5 space-x-4">
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/0.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/1.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/2.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/3.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/4.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/5.png"
            alt=""
          />
          <img
            className="w-2/3 h-full rounded-xl shadow-md shadow-indigo-700 hover:shadow-indigo-500 transition-all duration-300 ease-in-out border-indigo-900 border"
            src="/images/comments/6.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Comments;
