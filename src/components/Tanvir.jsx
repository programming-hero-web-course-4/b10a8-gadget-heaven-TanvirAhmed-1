import React from "react";
import banner from "../../assets/banner.jpg";

const Tanvir = () => {
  return (
    <div className="mb-[180px] md:mb-[350px] lg:[500px]">
      <div className="max-w-[1540px] mx-auto">
        <div className=" bg-[#9538E2]  font-sora pb-28 lg:pb-96">
          <div className="hero  relative">
            <div className="hero-content text-center">
              <div className="">
                <div className="lg:w-[1120px] mx-auto mt-10">
                  <h1 className="md:text-6xl text-5xl font-bold lg:leading-[72px] leading-[65px]  text-black">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                  </h1>
                </div>
                <div className="md:w-[794px] mx-auto">
                  <p className="py-6 font-normal md:text-xl text-base text-[#FFFFFF] opacity-70">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
                  </p>
                </div>
                <button className="bg-white  px-8 py-3 font-bold text-[#9538E2] text-xl rounded-3xl btn-primary">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative mx-9  ">
            <div className="  absolute inset-0 top-[108px] lg:top-[300px] md:top-[200px]  z-10 flex items-center justify-center ">
              <img
                className="object-cover lg:w-[1063px] md:w-[700px] md:h-[400px] lg:h-[563px] rounded-xl shadow-xl"
                src={banner}
                alt=""
                srcset=""
              />
            </div>
            <div className="absolute lg:left-[178px]  left-40 inset-0 lg:w-[1110px] h-[611px] bg-white z-0  opacity-50 rounded-2xl hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tanvir;
