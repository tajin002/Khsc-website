import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-blue-700 mt-16 lg:mt-5">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="https://i.ibb.co/5kLF6RJ/kurmitola-high-school-college-logo-8-F362-C41-D7-seeklogo-com-pxddh3t4q5iw9ty1vwsp5f0vjveqjpwvsw6566.png" alt="" />
            <div>
                <h1 className="ml-3 text-2xl">Kurmitola High School & College</h1>
                <h1 className="ml-5">Khilkhet, Dhaka-1229</h1>
            </div>
          </p>
          

          
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <p className="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </p>
            <p className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </p>
            <p className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </p>
            <p className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </p>
          </span>
        </div>
        <div className="text-center text-xl bg-blu-800 text-white mb-5">
            <h1 className="mb-5">Develop By : Tajin Shawon</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

