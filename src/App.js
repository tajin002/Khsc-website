import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { useEffect, useState } from 'react';
import logo from './images/khsc-logo.png'

function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },6000)
  },[])
  return (
    <div className='max-w-[1440px] mx-auto'>
      {
        loading ? 
        <div className='flex justify-center mt-60'>
          <div>
          {/* <p className='text-blue-400 text-2xl font-bold mb-5 ml-4'>KHSC</p> */}
          <img className='h-1/2 ml-20' src={logo} alt="" />
          <progress className="progress w-56"></progress>
          <h1 className='text-amber-300'>hello</h1>
          </div>
        </div>
        :
        <RouterProvider router={router} />
      }
    </div>
  );
}

export default App;
