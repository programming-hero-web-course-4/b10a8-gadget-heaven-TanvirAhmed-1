import React from 'react';
import Products from './Products';
import Tanvir from './Tanvir';


const Home = () => {
  return (
    <div>
      <Tanvir></Tanvir>
      <div>
      <h1 className='text-4xl font-sora font-bold text-black text-center mb-16'>Explore Cutting-Edge Gadgets</h1> 
      </div>
      <div className='font-sora lg:flex gap-4 max-w-[1280px] mx-auto  items-start justify-center'>
      <div className='lg:w-1/6 bg-[#F3F3F3] border-2 rounded-lg border-solid mx-2'>
             <div className='grid lg:grid-cols-1 grid-cols-3 gap-4 md:p-6 p-3  bg-white'>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>All Product</button>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>Laptops</button>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white  rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>Phones</button>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>Smart Watches</button>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>Iphone</button>
             <button className='btn border-none hover:bg-[#9538E2] hover:text-white rounded-3xl text-gray-600 bg-gray-200 text-[18px] font-medium'>MacBook</button>
             </div>
            </div>
            <div className='mt-10 lg:mt-0'>
            <Products></Products>
            </div>
      </div>
      
       
    </div>
  );
};

export default Home;