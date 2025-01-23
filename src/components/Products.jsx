import React, { useEffect, useState } from 'react';
import Product from './product';

const Products = () => {

    const [data ,setData]=useState([]);

    useEffect(()=>{
        fetch("./Alldata.json")
        .then(res=>res.json())
        .then(data=>setData(data))
       },[])

    console.log(data);

    return (
        <div className=' font-sora '>
          <div className=' flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-10 gap-4 md:gap-x-4'>
            {
                data.map(data=><Product
                key={data.product_id}
                product={data}
                ></Product>)
            }
           </div>
          </div>
        </div>
    );
};

export default Products;