import React from "react";
import { useTitle } from "../../../Hooks/UseTitle";

const Secondary = () => {
  useTitle('secondary')
  return (
    <div className="text-center">
      <h1 className="text-blue-500 text-2xl">Secondary Level :</h1> <br />
      <p className="text-xl">Class : Six To Ten</p>
    </div>
  );
};

export default Secondary;
