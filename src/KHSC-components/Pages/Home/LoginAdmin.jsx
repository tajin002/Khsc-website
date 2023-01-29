import React from 'react';
import { FaUserCheck, FaUserCog, FaUserGraduate } from "react-icons/fa";

const LoginAdmin = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className="ml-2 text-xl text-white text-center font-semibold bg-[#0E528E] rounded-lg p-1">
                    LOGIN PANEL
                </h1>
            </div>
            <div className='divide-y divide-blue-300 mt-5'>
                <div className='flex'>
                    <p className='text-blue-800 text-4xl'><FaUserCog/></p>
                    <p className='text-gray-600 text-xl font-semibold ml-2 mt-2'>Admin</p>
                </div>
                <div className='flex mt-2'>
                    <p className='text-blue-800 text-4xl'><FaUserCheck/></p>
                    <p className='text-gray-600 text-xl font-semibold ml-2 mt-2'>Teacher's Login</p>
                </div>
                <div className='flex mt-2'>
                    <p className='text-blue-800 text-4xl mt-1'><FaUserGraduate/></p>
                    <p className='text-gray-600 text-xl font-semibold ml-2 mt-2'>Student Login</p>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;