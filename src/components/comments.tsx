/* eslint-disable */
import React, { useEffect } from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <>
      <div className="class flex-col space-y-5 flex items-center pt-44">
        <h1 className="text-center text-4xl text-white">
          Social media on share section
        </h1>
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/0.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/1.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/2.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/3.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/4.png"
          alt=""
        />
        <img
          className="w-2/3 h-full rounded-xl"
          src="/images/comments/5.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Comments;
