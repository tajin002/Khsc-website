import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
      <div className="mt-10 lg:mt-36">
        <h1 className="text-xl text-white text-center font-bold bg-[#0E528E] rounded-lg p-1">
          FOLLOW ON US
        </h1>
        <div className="flex divide-x divide-bg-blue-900 mt-4 justify-center lg:justify-start">
            <div className="flex">
                <h1 className="text-blue-500 text-3xl mt-1"><FaFacebook/></h1>
                <h1 className="text-lg ml-1 mt-1 font-bold">Facebook</h1>
            </div>
            <div className="flex ml-1">
                <h1 className="text-red-500 text-3xl mt-1"><FaYoutube/></h1>
                <h1 className="text-lg ml-1 mt-1 font-bold">Youtube</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
