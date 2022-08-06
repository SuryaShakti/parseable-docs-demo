import React from 'react'

const UpcomingSection = () => {
  return (
    <div className="w-full mt-8 py-10 md:py-0 h-60 bg-gray-bg bg-cover bg-no-repeat flex flex-col justify-end">
      <div className="w-full max-w-5xl h-3/4 grid gap-3 grid-cols-3 mx-auto sm:px-6 px-3">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            className="h-14 w-14"
            src={"img/Icon ionic-md-notifications-outline.svg"}
          />
          <div className="hidden md:block text-md leading-tight mt-2">
            Alerting
          </div>
          <div className="md:hidden text-md leading-tight ">
            Alerting
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <img className="h-14 w-14" src={"img/Icon metro-file-archive.svg"} />
          <div className="text-md leading-tight mt-2">Log retention</div>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <img className="h-14 w-14" src={"img/Icon simple-openaccess.svg"} />
          <div className="text-md leading-tight mt-2">Access Control</div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSection