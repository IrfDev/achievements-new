/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Thanks = (props: Props) => {
  const [canSee, setcanSee] = useState(false);
  useEffect(() => {
    if (canSee) {
      let cg: any = {};

      cg.gridContainer = document.querySelector(".container");
      cg.cover = document.querySelector(".cover");
      cg.music = document.querySelector("audio");

      // Grid render fix

      cg.fadeCover = () => {
        cg.cover.style.animation = "fade-out 300ms linear 1 forwards";
      };
      cg.fadeCover();
    }
  }, [canSee]);

  return (
    <>
      {canSee ? (
        <section className="synth relative mt-10">
          <div className="cover"></div>

          <div id="horizon">
            <div id="sun"></div>
            <div className="inner">
              <h1 className="title uppercase">Thank you</h1>
              <h2 className="subtitle">:D</h2>
            </div>
          </div>

          <section className="animation-some"></section>
          <div className="grid">
            <div className="grid-inner">
              <div className="hori">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="vert">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Waypoint
          onEnter={() => {
            setcanSee(true);
          }}
        >
          <div className="bg-black mt-20 h-20 w-full"></div>
        </Waypoint>
      )}
    </>
  );
};

export default Thanks;
