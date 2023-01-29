import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl text-white text-center font-bold bg-[#0E528E] rounded-lg p-1">
          Latest Notice
        </h1>
      </div>
      <div className="divide-y divide-gray-500">
        <div className="flex mt-3 mb-2">
            <h1 className="text-xl pt-4"><FaArrowAltCircleRight/></h1>
            <a className="ml-2" rel="noreferrer" href='https://khsc.edu.bd/wp-content/uploads/2023/01/IMG_0004.pdf' target="_blank">
                    একাদশে ভর্তির জন্য প্রয়োজনীয় কাগজপত্র
            </a>
        </div>
        <div className="flex mt-3 mb-2">
            <h1 className="text-xl pt-4"><FaArrowAltCircleRight/></h1>
            <Link to='/elevenClassNotice'>
            <p className="ml-2">একাদশ শ্রেণির ২য় পর্যায়ের আবেদনের শেষ তারিখ (১০/০১/২০২৩)</p>
            </Link>
        </div>
        <div className="flex mb-2">
            <h1 className="text-xl mt-2"><FaArrowAltCircleRight/></h1>
            <Link to='/admission'>
               <p className="mt-2 ml-2">ভর্তি বিজ্ঞপ্তি</p>
            </Link>
        </div>
        {/* <div className="flex mt-3 mb-2">
            <h1 className="text-xl pt-4"><FaArrowAltCircleRight/></h1>
            <a className="ml-2" rel="noreferrer" href='https://khsc.edu.bd/wp-content/uploads/2023/01/IMG_0004.pdf' target="_blank">
                    ইংরেজি ভার্সনে ভর্তি বিজ্ঞপ্তি
            </a>
        </div> */}
        {/* <div className="flex mt-3 mb-2">
            <h1 className="text-xl pt-4"><FaArrowAltCircleRight/></h1>
            <a className="ml-2" rel="noreferrer" href='https://khsc.edu.bd/wp-content/uploads/2023/01/IMG_0004.pdf' target="_blank">
                    একাদশ শ্রেণি ভর্তি নীতিমালা -২০২২
            </a>
        </div> */}
      </div>
    </div>
  );
};

export default Notice;
