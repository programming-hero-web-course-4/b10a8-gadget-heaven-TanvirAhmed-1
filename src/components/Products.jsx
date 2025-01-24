import React, { useEffect, useState } from "react";
import Product from "./product";

const Products = () => {
  const [data, setData] = useState([]);
  const[datafilter , setfilter]=useState([]);

  const [bactive, setbactive]=useState(false);

  useEffect(() => {
    fetch("./Alldata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(()=>
    {
    setfilter(data);
  },[data]);

  const all=(all)=>{
    setbactive(all);
    setfilter(data);
    
  }

const filterdata=( category)=>{

    setbactive(category);


        const onlyPhoneData = data.filter(
            (value) => value.category === category);
          setfilter(onlyPhoneData); 
        
    

};


  return (
    <div className=" flex font-sora  max-w-[1280px] mx-auto gap-4">
      <div className="font-sora ">
        <div className="lg:w-6/6 bg-[#F3F3F3] border-2 rounded-lg border-solid mx-2">
          <div className="grid lg:grid-cols-1 grid-cols-3 gap-4 md:p-6 p-3  bg-white">
            <button onClick={()=>all("all")} className={`btn hover:bg-[#d049c3] ${bactive==="all" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              All Product
            </button>
            <button onClick={()=>filterdata("Laptop")}  className={`btn hover:bg-[#d049c3] ${bactive==="Laptop" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              Laptops
            </button>
            <button  onClick={()=>filterdata("Smartphone")} className={`btn hover:bg-[#d049c3] ${bactive==="Smartphone" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              Phones
            </button>
            <button  onClick={()=>filterdata("Smart Watch")} className={`btn hover:bg-[#d049c3] ${bactive==="Smart Watch" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              Smart Watches
            </button>
            <button onClick={()=>filterdata("iphon")} className={`btn hover:bg-[#d049c3] ${bactive==="iphon" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              Iphone
            </button>
            <button  onClick={()=>filterdata("mackbook")} className={`btn hover:bg-[#d049c3] ${bactive==="mackbook" ?"bg-[#9538E2] text-white":"text-gray-600 bg-gray-200 "} border-none rounded-3xl  text-[18px] font-medium`}>
              MacBook
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0"></div>
      </div>

      <div className=" flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-10 gap-4 md:gap-x-4">
          {
          datafilter.map((data) => (
            <Product key={data.product_id} product={data}></Product>
          ))};
        </div>
      </div>
    </div>
  );
};

export default Products;
