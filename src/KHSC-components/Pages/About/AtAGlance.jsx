import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const AtAGlance = () => {
    useTitle('At A Glance')
    return (
        <div className='mb-10'>
            <h1 className='text-3xl lg:text-5xl text-center text-gray-600 mt-5 font-bold'>কুর্মিটোলা হাই স্কুল এন্ড কলেজ পরিচিতি</h1>
            <div className='mt-10 text-xl ml-5 lg:ml-72'>
                <h1 className=''><span className='font-semibold'>অবস্থান :</span> <br /> কুর্মিটোলা হাই স্কুল এন্ড কলেজ, খিলক্ষেত, ঢাকা-১২২৯।</h1>

                <h1>১লা জানুয়ারী, ১৯৪৮ খ্রিঃ</h1>
                <h1 className='mt-5'><span className='font-semibold mb-5'>শিক্ষার মাধ্যম :</span> <br /> ১। বাংলা ভার্সন (শিশু থেকে দ্বাদশ), <br /> ২। ইংরেজি ভার্সন  (শিশু থেকে প্রথম)</h1>

                <h1 className='mt-5'><span className='font-semibold mb-5'>শিক্ষা প্রতিষ্ঠানের ধরণ ঃ</span> <br /> ১। প্রভাতি শাখা-বালিকা : শিশু থেকে দ্বাদশ <br /> ২। দিবা শাখা- বালক : দ্বিতীয় থেকে দ্বাদশ</h1>

                <h1 className='mt-5 mb-5'>** মোট শিক্ষক ও কর্মচারী ঃ ১৫০ জন **</h1>


                <h1><span className='font-semibold mb-5'>মোট শিক্ষার্থী সংখ্যা ঃ</span> <br /> স্কুল শাখা : প্রায় ৪,৫০০ জন <br />  কলেজ শাখা : প্রায় ৮০০ জন</h1>


                <h1 className='mt-5'> <span className='font-semibold'>বিভাগসমূহ ঃ</span> <br />
                 ১। বিজ্ঞান বিভাগ <br />
                 ২। ব্যবসায় শিক্ষা বিভাগ ও <br />
                 ৩। মানবিক বিভাগ।
                 </h1>

                <h1 className='font-semibold mt-5'> একাডেমিক ভবন সংখ্যা ঃ</h1>
                <h1>১। পাঁচতলা বিশিষ্ট দুইটি বৃহৎ ভবন</h1>
                <h1>২। ১২ তলা ফাউন্ডেশনের উপর লিফ্ট যুক্ত ৮ তলা ভবন।</h1>
                <h1 className='font-semibold mt-5'>সুবিধাসমূহ ঃ</h1>
                <h1>১। মানসম্মত অডিটোরিয়াম</h1>
                <h1>২। গ্রউন্ডফ্লোরে মানসম্মত ক্যান্টিন</h1>
                <h1>৩। অভিভাবকগণের জন্য অপেক্ষমান কক্ষ</h1>
                <h1>৪। শিক্ষক ও শিক্ষার্থীদের জন্য নামাজ আদায়ের কক্ষ</h1>
                <h1>৫। শিক্ষার্থীদের ব্যবহারিক ক্লাসের জন্য বিজ্ঞান ল্যাব</h1>
                <h1>৬। আইসিটি শিক্ষার জন্য শেখ রাসেল ডিজিটাল ল্যাব</h1>
                <h1>৭। দৃষ্টি নন্দন বিশাল খেলার মাঠ ও বাগান</h1>
                <h1>৮। সাবমারসিবল পাম্পের মাধ্যমে সকল সাপ্লাই লাইনে বিশুদ্ধ পানির  ব্যবস্থা রয়েছে।</h1>
            </div>
        </div>
    );
};

export default AtAGlance;