import React from "react";

const Banner = () => {
  return (
    <div className="p-6 py-12 bg-[#3393e8] text-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div>
            <img
              className="ml-6 lg:ml-24"
              src="https://i.ibb.co/5kLF6RJ/kurmitola-high-school-college-logo-8-F362-C41-D7-seeklogo-com-pxddh3t4q5iw9ty1vwsp5f0vjveqjpwvsw6566.png"
              alt="kurmitola-high-school-college-logo-8-F362-C41-D7-seeklogo-com-pxddh3t4q5iw9ty1vwsp5f0vjveqjpwvsw6566"
              border="0"
            ></img>{" "}
            <br />
            <h1 className="text-yellow-400 text-xl font-bold font-serif ml-6 lg:ml-24">
              ESTD:1948
            </h1>
          </div>
          <div className="space-x-2 text-center py-2 lg:py-0 font-serif">
            <div>
              <h1 className="text-white text-4xl font-bold">
                Kurmitola High School & College
              </h1>
              <h1 className="text-[#EAEC2B] text-3xl py-2">
                Khilkhet, Dhaka-1229
              </h1>
              <h1 className="text-[#EAEC2B] text-3xl">EIIN: 107823</h1>
              <h1 className="text-[#EAEC2B] text-3xl">
                School Code: 1260, College Code: 1253
              </h1>
            </div>
            <div className="flex mt-10 lg:mt-16 border-[#ee5757] ">
              <div className="bg-[#CE2525] mr-3 font-semibold text-normal text-white pl-3">
                <h1 className="text-center mr-3 mt-1">News:</h1>
              </div>
              <div className="text-white">
                <marquee>
                  ৮ই ডিসেম্বর ২০২২ তারিখ থেকে একাদশ/সমমান শ্রেণিতে ভর্তির অনলাইন
                  আবেদন শুরু হয়েছে। উল্লেখ্য অনলাইন ব্যতীত ম্যানুয়ালি কোন
                  ভর্তির কার্যক্রম করা হবে না। শিশু থেকে ৯ম শ্রেণি পর্যন্ত (২০২৩
                  শিক্ষা বর্ষ) বাংলা ভার্সনে ভর্তি ফর্ম বিতরণ চলছে।
                </marquee>
              </div>
              <div>
                {/* <h1 className="bg-red-500">Online Admission</h1> */}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <a href="https://imgbb.com/">
              <img
                className="mr-32"
                src="https://i.ibb.co/n0wKJDW/imageedit-1-4251628499-pyzyacxumk9zmpxh6fl6jm1zp905f1zskqx3hdrwgy.png"
                alt="imageedit-1-4251628499-pyzyacxumk9zmpxh6fl6jm1zp905f1zskqx3hdrwgy"
                border="0"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
