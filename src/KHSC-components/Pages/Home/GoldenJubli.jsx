import React from "react";
import { Link } from "react-router-dom";

const GoldenJubli = () => {
  return (
    <div>
      <div className="mt-24">
        <div>
          <h1 className="text-xl text-white text-center font-bold bg-[#0E528E] rounded-lg p-1">
            Welcome To KHSC
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/5vmv8BT/300x169.png"
            alt="300x169"
            border="0"
          />
        </div>
        <p className="mt-5 text-gray-500">
        ১৯৭১ সালের ২৫শে মার্চ রাতে পাকিস্তান সেনাবাহিনী ঢাকাসহ সমগ্র বাংলাদেশে গণহত্যা চালায়। এই গণহত্যায় শুধুমাত্র ঢাকাতেই ৬ থেকে ৭ হাজার সাধারণ মানুষ সেই রাতে প্রাণ হারায়। বাংলাদেশে এই দিনটি জাতীয় গণহত্যা দিবস নামে পরিচিত। সেই দিন রাত ১২ টার পর (২৬শে মার্চ প্রথম প্রহরে) বঙ্গবন্ধু শেখ মুজিবুর রহমান বাংলাদেশের স্বাধীনতা ঘোষণা করেন এবং মুক্তিযুদ্ধ শুরু হয়। ২৬শে মার্চ প্রথম প্রহরে বঙ্গবন্ধু বাংলাদেশের স্বাধীনতা ঘোষণা করায় ১৯৭২ সাল থেকেই বাংলাদেশ ২৬শে মার্চ কে “স্বাধীনতা দিবস” হিসাবে পালন করে আসছে। অবশেষে ১৯৭১ সালের ১৬ই ডিসেম্বর পাকিস্তানি সেনাবাহিনী আত্মসমর্পণ করে এবং বাংলাদেশ বিজয় অর্জন করে। এই দিনটি ১৯৭২ সাল থেকে বাংলাদেশ বিজয় দিবস হিসাবে পালন করছে। ২০২১ সালে স্বাধীনতার ঘোষণা ও যুদ্ধে বিজয় অর্জনের ৫০ বছর পূর্ণ হয়। তাই স্বাধীনতার ৫০তম বার্ষিকীকে স্মরণীয় করে রাখতে ২০২১ সালকে “সুবর্ণজয়ন্তী” হিসাবে পালন করা হয়……….
        </p>
        <div className="flex justify-center">
         <Link to='/goldenjubliIndex'> 
            <button className="bg-blue-600 p-1 text-white rounded-md mt-5 w-52 ">
                Read More
            </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default GoldenJubli;
