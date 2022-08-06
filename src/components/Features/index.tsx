import React from "react";

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-6xl pt-20  md:pt-28 mx-auto sm:px-6 lg:px-8 px-3"
    >
      <div className="text-white">
        <div className="text-center text-2xl font-bold">Features</div>
        <div className="text-center mt-4 text-md">
          Parseable is a high performance, cloud native, developer friendly
          platform for log storage and management
        </div>
      </div>
      <div className="mt-12 w-full gap-3 grid grid-cols-2 md:grid-cols-3">
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Fast Log Ingestion
          </div>
          <div className="mt-2 text-sm">
            Simple and high performance data ingestion with SDK less REST API
          </div>
          <img
            src={"img/Icon material-donut-large.svg"}
            className="absolute opacity-10 w-16 sm:w-28 top-4 right-4"
          />
        </div>
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Cloud Native Design
          </div>
          <div className="mt-2 text-sm">
            Deploy on Kubernetes in seconds and start collecting logs from all
            containers
          </div>
          <img
            src={"img/download-icon-kubernetes-1324440186569978041_0.svg"}
            className="absolute w-16 sm:w-28 top-4 right-4"
          />
        </div>
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Parquet Format
          </div>
          <div className="mt-2 text-sm">
            Store log data as high compress and analytics friendly Parquet
            format
          </div>
          <img
            src={"img/Component 17–1.svg"}
            className="absolute w-16 sm:w-28 top-4 right-4"
          />
        </div>
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Object Storage
          </div>
          <div className="mt-2 text-sm">
            Parseable uses object storage as the primary storage
          </div>
          <img
            src={"img/Icon awesome-cloud.svg"}
            className="absolute w-16 sm:w-28 top-4 right-4"
          />
        </div>
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Own Your Log Data
          </div>
          <div className="mt-2 text-sm">
            Bring your own bucket and completely own your log storage data
          </div>
          <img
            src={"img/Icon awesome-user-lock.svg"}
            className="absolute w-16 sm:w-28 top-4 right-4"
          />
        </div>
        <div className="w-full relative px-4 bg-white custom-shadow2 h-44 sm:h-56 border flex flex-col items-center justify-center">
          <div className="text-lg md:text-2xl font-bold w-full">
            Simple, Intuitive UI
          </div>
          <div className="mt-2 text-sm">
            Intuitive dashboard to parse through log data efficiently
          </div>
          <img
            src={"img/Icon material-desktop-windows.svg"}
            className="absolute w-16 sm:w-28 top-4 right-4"
          />
        </div>
      </div>
      <div className="text-center mt-12 text-lg md:text-2xl font-bold w-full">
        Coming Soon
      </div>
      <div className="text-center mt-2 text-md">
        Upcoming features getting added to Parseable
      </div>
    </div>
  );
};

export default Features;
