// import Link from "next/link";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Developers", "Analysts", "Managers"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id={""} className="flex-1">
      <div className="h-3/4 relative overflow-hidden">
        <div className="max-w-6xl  mx-auto sm:px-6 h-full grid md:grid-cols-2 lg:px-8 px-3">
          <div className="flex flex-col justify-center">
            <div className=" text-3xl md:text-4xl lg:text-5xl">
              {"Cloud native log storage & management for"}
            </div>
            <h1 className="mt-5 mb-10 text-3xl md:text-4xl lg:text-5xl text-bluePrimary font-bold items-center">
              <TextTransition springConfig={presets.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <div className="md:hidden">
              <img src={"img/Group 331.svg"} />
            </div>
            <div className="block sm:flex w-full mt-4 space-y-3 sm:space-y-0 sm:space-x-6 items-center">
              <a
                href={"https://launchpass.com/parseable"}
                passHref
                // className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-yellowButton border-2 border-yellowButton"
              >
                <a
                  target="_blank"
                  className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-yellowButton border-2 border-yellowButton"
                >
                  <img className="w-5" src="img/slack-new-logo.svg" />
                  <span>Join our community</span>
                </a>
              </a>
              <a
                href={"/docs/intro"}
                target="_blank"
                // className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-white border-2 border-bluePrimary"
              >
                <a
                  target="_blank"
                  className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-white border-2 border-bluePrimary"
                >
                  <img className="w-5" src="img/Icon awesome-book-open.svg" />
                  <span>Documentation</span>
                </a>
              </a>
            </div>
          </div>
        </div>
        <img
          src={"img/Group 331.svg"}
          className="hidden md:block max-w-1/2 absolute -bottom-4 h-110 -right-6"
        />
      </div>

      {/* Down Section */}
      <div className="custom-shadow z-10 w-full border-b-2 mt-5 md:mt-0 py-10 md:py-0 h-1/4 bg--100">
        <div className="max-w-5xl h-full grid gap-3 grid-cols-3 mx-auto sm:px-6 px-3">
          <div className="h-full flex flex-col justify-center items-center">
            <img className="h-14 w-14" src={"img/Icon material-timer.svg"} />
            <div className="hidden md:block text-base font-medium leading-tight mt-2">
              Deploy in seconds
            </div>
            <div className="md:hidden text-base font-medium leading-tight mt-2">
              Deploy in seconds
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <img
              className="h-14 w-14"
              src={"img/Icon material-donut-large.svg"}
            />
            <div className="hidden md:block text-base font-medium leading-tight mt-2">
              Fast log ingestion
            </div>
            <div className="md:hidden text-base font-medium leading-tight mt-2">
              Fast logs ingestion
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <img
              className="h-14 w-14"
              src={"img/Icon material-multiline-chart.svg"}
            />
            <div className="hidden md:block text-base font-medium leading-tight mt-2">
              Access and analyse logs
            </div>
            <div className="md:hidden text-base font-medium leading-tight mt-2">
              Access and analyse logs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
