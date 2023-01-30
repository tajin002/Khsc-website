import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const GoverningBody = () => {
    useTitle('Governing Body')
    return (
        <div>
            <h1 className='text-4xl text-blue-400 text-center font-semibold mt-5'>Governing Body Of Kurmitola High School & College</h1>

            <div className='flex justify-center mt-10 mb-5'>
                <img src="https://i.ibb.co/xzPZq6n/Sing-Board-622x1024.jpg" alt="Sing-Board-622x1024" border="0"/>
            </div>
        </div>
    );
};

export default GoverningBody;