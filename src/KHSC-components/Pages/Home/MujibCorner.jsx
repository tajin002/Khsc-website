import React from 'react';
import { Link } from 'react-router-dom';

const MujibCorner = () => {
    return (
        <div className='mt-3'>
            {/* Mujib Corner */}
                <h1 className="text-xl text-white text-center font-semibold bg-[#0E528E] rounded-lg p-1">
                    Mujib Corner
                </h1>
            <div className='mt-5'>
                <img src="https://i.ibb.co/qRnQyDN/mujib-logo.png" alt="mujib-logo" border="0"/>
            </div>

            {/* massage of chairman */}
                <h1 className="text-xl text-white text-center font-semibold bg-[#0E528E] rounded-lg p-1">
                    Massage of Chairman
                </h1>
            <div className='mt-5'>
                <img src="https://i.ibb.co/PrfztR4/Screenshot-20221123-134136-Facebook-833x1024.jpg" alt="Screenshot-20221123-134136-Facebook-833x1024" border="0"/>
            </div>
            <div className="mt-3 ml-2">
            <p className="font-sans text-sm">Kurmitola High School & College is a co-educational Bangladeshi higher secondary school situated in Khilkhet…Kurmitola High School & College is a co-educational Bangladeshi higher secondary school situated in Khilkhet…</p>
            <Link to='/#'>
                <p className="bg-[#CE2525] text-center text-white text-sm p-1 mt-3">Read More</p>
            </Link>
          </div>
            <div className='text-center divide-y divide-red-500 mt-4 shadow-lg border-4  border-t-indigo-500'>
                <h1 className='text-indigo-400 font-bold text-normal'>DBBL E-Payment</h1>
                <h1 className='text-indigo-400 font-bold text-sm'>DBBL E-Payment</h1>
                <h1 className='text-red-400 font-normal text-sm'>অনলাইন টিউশন ফি</h1>
            </div>
        </div>
    );
};

export default MujibCorner;