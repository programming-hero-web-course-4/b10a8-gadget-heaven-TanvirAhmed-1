import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
<div className="max-w-[1540px] mx-auto">
<div className=" bg-[#9538E2]  font-sora mb-96">
      <div className="hero  min-h-screen relative">
        <div className="hero-content text-center">
          <div className="">
            <div className="w-[1120px] mx-auto">
              <h1 className="text-6xl font-bold leading-[72px] text-black">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
            </div>
            <div className="w-[794px] mx-auto">
              <p className="py-6 font-normal text-base text-[#FFFFFF] opacity-70">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
            <button className="bg-white px-8 py-3 font-bold text-[#9538E2] text-xl rounded-3xl btn-primary">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className=" relative ">
      <div className="  absolute inset-0 top-[108px]  z-10 flex items-center justify-center ">
          <img
            className="object-cover w-[1063px] h-[563px] rounded-xl shadow-xl"
            src={banner}
            alt=""
            srcset=""
          />
        </div>
        <div className="absolute top-[-200px]  left-20 inset-0 w-[1110px] h-[611px] bg-white z-0  opacity-50 rounded-2xl"></div>
      </div>
        
    </div>
</div>
  );
};

export default Banner;
