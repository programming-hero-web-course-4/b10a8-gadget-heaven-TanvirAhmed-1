import React from 'react';
import Products from './Products';
import Tanvir from './Tanvir';
import { Link } from 'react-router-dom';
import Phone from './Phone';


const Home = () => {

  const phoneData=()=>{
     
  }


  return (

    <div>
      <Tanvir></Tanvir>
      <div>
      <h1 className='text-4xl font-sora font-bold text-black text-center mb-16'>Explore Cutting-Edge Gadgets</h1> 
      </div>
      <Products></Products>
      
       
    </div>
  );
};

export default Home;