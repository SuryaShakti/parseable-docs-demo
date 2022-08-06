// import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div
      id="community"
      className="max-w-6xl pt-20 mx-auto sm:px-6 lg:px-8 px-3"
    >
      <div className="grid  md:grid-cols-5 ">
        <div className="md:col-span-3 ">
          <div className="mt-4 pr-5">
            <div className="text-bluePrimary text-2xl font-bold">Community</div>
            <div className="my-7 text-md">
              Parseable is built on the principles of open and free software.
              Join our global community of contributors, developers, and
              enthusiasts on Slack and GitHub
            </div>
            <div className="block sm:flex w-full mt-7 space-y-3 sm:space-y-0 sm:space-x-6 items-center">
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
                passHref
                href={"https://github.com/parseablehq/parseable/stargazers"}
                // className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-white border-2 border-bluePrimary"
              >
                <a
                  target="_blank"
                  className="w-full sm:w-auto flex items-center rounded-md text-xs px-5 py-2 font-semibold space-x-3 text-bluePrimary bg-white border-2 border-bluePrimary"
                >
                  <img className="w-5" src="img/Icon awesome-github-alt.svg" />
                  <span>Star on GitHub</span>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 mt-5 md:mt-0">
          <img className="w-full" src={"img/Component 18 – 1.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Community;
