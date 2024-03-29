import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
          >
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                About us
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to='/at-a-glance'>At a Glance</Link>
                </li>
                <li>
                    <Link to='/governing-body'>Governing Body</Link>
                    
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Academic
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>Primary</Link>
                </li>
                <li>
                  <Link>Secondary</Link>
                </li>
                <li>
                  <Link>College</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/administration'>Administration</Link>
            </li>
            <li>
              <Link to='/recruitment'>Recruitment</Link>
            </li>
            <li>
              <Link to='gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='contact-us'>Contact us</Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>

    {/*for  large device  */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='home'>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              About us
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-gray-200">
              <li>
                <Link to='at-a-glance'>At a Glance</Link>
              </li>
              <li>
                <Link to='governing-body'>Governing Body</Link>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link>
              Academic
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-gray-200">
              <li>
                <Link to='/primary'>Primary</Link>
              </li>
              <li>
                <Link to='/secondary'>Secondary</Link>
              </li>
              <li>
                <Link to='/college'>College</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='administration'>Administration</Link>
          </li>
          <li>
            <Link to='/recruitment'>Recruitment</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  );
};

export default Navbar;
