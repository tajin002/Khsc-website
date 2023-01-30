import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const Administration = () => {
    useTitle('Administration');
    return (
        <div className='mt-10'>
            <h1 className='text-2xl text-center text-blue-400 font-semibold mt-5'>Administration of KHSC</h1>

            <div className='relative mt-16'>
                <img className='mx-auto w-[250px]' src="https://i.ibb.co/PrfztR4/Screenshot-20221123-134136-Facebook-833x1024.jpg" alt="Screenshot-20221123-134136-Facebook-833x1024" border="0"/>
                <h1 className='text-center mt-2'>জনাব মোঃ আসলাম উদ্দিন,(সভাপতি গভর্নিং বডি)</h1>
            </div>

            <div className='relative mt-16'>
                <img className='mx-auto w-[250px]' src="https://i.ibb.co/WgG2WPG/Principal-806x1024.jpg" alt="Principal-806x1024" border="0"/>
                <h1 className='text-center mt-2'>জনাব মোঃ আব্দুল খালেক, অধ্যক্ষ-(ভারপ্রাপ্ত)</h1>
            </div>

            <div className='relative mt-16'>
                <img className='mx-auto w-[250px]' src="https://i.ibb.co/FnWTVjL/03-Jalal.jpg" alt="03-Jalal" border="0"/>
                <h1 className='text-center mt-2'>জনাব মোঃ জালাল উদ্দিন, সহঃ প্রধান শিক্ষক</h1>
            </div>

            <div className='relative mt-16'>
                <img className='mx-auto w-[250px]' src="https://i.ibb.co/j4vZt8f/Kader-sir-300x300.jpg" alt="Kader-sir-300x300" border="0"/>
                <h1 className='text-center mt-2'>জনাব মোঃ ফজলুল কাদের, শিফট ইনচার্জ (দিবা শাখা)</h1>
            </div>
        </div>
    );
};

export default Administration;