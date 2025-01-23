import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStorbuy, addToStorwish } from "../savedata";

const Productdetails = () => {
  const [product, setProduct] = useState([]);

  const { productdatils } = useParams();


  const Loderdata = useLoaderData();
  // console.log( Loderdata[0].product_id);

  const findProduct = Loderdata.find(
    (product) => product.product_id === productdatils
  );

  const {
    price,
    product_id,
    rating,
    availability,
    product_image,
    product_title,
    specification,
    description,
  } = findProduct;

  const handletoby=(id)=>{
    addToStorbuy(id)
  }
  const handletowish=(id)=>{
    addToStorwish(id)
  }

  return (
    <div className="font-sora lg:mb-[500px] mb-[700px] md:mb-[400px]">
      <div className="relative max-w-[1600px] h-[375px] mx-auto bg-[#9538E2] pt-10 ">
        <h1 className="lg:text-6xl md:text-4xl  text-3xl font-bold py-2 text-black text-center">
          Product Details
        </h1>
        <p className="md:w-[794px] mx-auto text-xl font-normal text-gray-200 text-center md:pb-20  pb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="  md:absolute static md:top-[50%] left-[22.5%] lg:left-[12.5%] md:left-[50%] lg:ml-[-200px] lg:mr-[-200px] ">
          <div className="hero bg-white lg:w-[1280px] md:w-[800px] rounded-2xl  w-[300px] ml-[12%]">
            <div className="flex gap-6  flex-col  justify-center items-center md:flex-row-reverse p-6">
              <div className="md:hidden">
                <div className="md:w-[424px] md:h-[503px] bg-[#ECECEC] p-5 grid justify-center items-center rounded-xl">
                  <div className="">
                    <img
                      className=" w-[400px] object-cover rounded-xl"
                      src={product_image}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left lg:pt-7 ">
                <h1 className="text-5xl text-black font-bold">
                  {product_title}
                </h1>
                <p className="py-6 text-3xl text-gray-600 font-bold ">
                  Price: $ {price}
                </p>
                <button className="bg-gray-200 px-8 py-2 border-2 border-solid text-xl font-semibold rounded-full  border-[#309C08] text-[#309C08]">
                  {availability === true ? "In Stock" : "stock out"}
                </button>
                <p className="text-2xl pt-4 font-semibold text-gray-500 ">
                  {description}
                </p>
                <div className="text-2xl font-medium text-gray-500 grid gap-4 mt-4">
                  {Object.values(specification).map((data, index) => (
                    <p key={index}>
                      {index + 1}. {data}
                    </p>
                  ))}
                </div>

                <div className="grid gap-4">
                  <h4 className="text-3xl mt-3 font-bold text-black">Rating</h4>
                  <div className=" flex gap-4 justify-start items-center">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p className="text-2xl font-medium text-gray-500 grid gap-4 my-1">
                      {rating}
                    </p>
                  </div>
                  <div className=" flex gap-4">
                    <button onClick={()=>handletoby(product_id)} className=" flex justify-center gap-2 items-center py-3 hover:text-black text-white text-xl font-semibold px-6 bg-[#9538E2] border-2 rounded-full border-solid border-gray-600">
                    Add To Card
                      <img
                        className=" bg-[#9538E2]  w-6 "
                        src="https://img.icons8.com/?size=100&id=sxzNrtpZazQb&format=png&color=000000"
                        alt=""
                        srcset=""
                      />
                    </button>
                    <button onClick={()=>handletowish(product_id)} className=" border-2 rounded-full border-solid border-gray-600 p-2 hover:bg-[#9538E2] ">
                      <img
                        className=" bg-white hover:bg-[#9538E2]   w-10"
                        src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
                        alt=""
                        srcset=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block lg:mr-8">
                <div className="md:w-[424px] md:h-[560px] bg-[#ECECEC] p-8 grid justify-center items-center rounded-xl">
                  <div className="">
                    <img
                      className=" w-[400px] object-cover rounded-xl"
                      src={product_image}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
