import React from "react";
import { Link } from "react-router-dom";

const Massage = () => {
  return (
    
      <div>
        {/* Massage of MP */}
        <div className="mt-3">
                <h1 className="text-xl text-white text-center font-semibold bg-[#0E528E] rounded-lg p-1">
                    Massage of Mp
                </h1>
          <div className="mt-5 ml-2">
            <img src="https://i.ibb.co/rFdkDGP/profile-768x767.jpg" alt="profile-768x767" border="0"/>
          </div>
          <div className="mt-3 ml-2">
            <p className="font-sans text-sm">Kurmitola High School & College is a co-educational Bangladeshi higher secondary school situated in Khilkhet…</p>
            <Link to='/#'>
                <p className="bg-[#CE2525] text-center text-white text-sm p-1 mt-3">Read More</p>
            </Link>
          </div>
        </div>
        {/* Massage of principle */}
        <div className="mt-3">
                <h1 className="text-xl text-white text-center font-semibold bg-[#0E528E] rounded-lg p-1">
                    Massage of Principle
                </h1>
          <div className="mt-5 ml-2">
          <img src="https://i.ibb.co/WgG2WPG/Principal-806x1024.jpg" alt="Principal-806x1024" border="0"/>
          </div>
          <div className="mt-3 ml-2">
            <p className="font-sans text-sm">Kurmitola High School & College is a co-educational Bangladeshi higher secondary school situated in Khilkhet…</p>
            <Link to='/#'>
                <p className="bg-[#CE2525] text-center text-white text-sm p-1 mt-3">Read More</p>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Massage;
