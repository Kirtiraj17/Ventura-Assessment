import React from "react";

const IPOStatusDesktop = ({ ipoData }) => {
  return (
    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      {Object.entries(ipoData?.status).map(([key, value], idx) => (
        <li key={idx} className="flex w-full relative text-green-600  after:content-['']  after:w-[130%] last:after:w-[40%] after:h-0.5  after:bg-green-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
          <div className="block whitespace-nowrap z-10">
            <span className="w-6 h-6 bg-green-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
              <img
                src="https://d10b7kv2y188ox.cloudfront.net/react/check.svg"
                alt="check"
              />
            </span>{" "}
            <div className="text-center">
              <p className="mb-1 font-semibold capitalize text-gray-900">
                {key.replace(/_/g, " ")}
              </p>
              <span className="text-gray-500">{value}</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default IPOStatusDesktop;
