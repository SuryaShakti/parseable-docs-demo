import React from "react";

const VideoSection = () => {
  return (
    <div
      id={"demo"}
      className="max-w-6xl -mt-60 md:-mt-96 pt-24 mx-auto sm:px-6 lg:px-8 px-3"
    >
      <div>
        <div className="text-center text-2xl font-bold">
          Parseable in Action
        </div>
        {/* <div className="text-center mt-4 text-md">
          Here is a short video that shows Parseable Dashboard in action.
        </div> */}
        <div className="hidden md:block h-96 mt-10 rounded-md w-full md:w-2/3 mx-auto bg-stone-200">
          <img
            src={"img/pika-2022-07-17T14_35_41.902Z.png"}
            className="rounded-md w-full h-full"
          />
        </div>
        <div className="md:hidden  mt-10 rounded-md w-80  mx-auto bg-stone-200">
          <img
            src={"img/pika-2022-07-17T14_35_41.902Z.png"}
            className="rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
