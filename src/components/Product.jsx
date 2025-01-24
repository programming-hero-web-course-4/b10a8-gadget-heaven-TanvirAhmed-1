import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {price, product_id, category, product_image, product_title } = product;

  return (
    <div className="font-sora card bg-white md:w-80 w-72 shadow-xl p-6 border-[#F3F3F3] border-2 grid justify-center items-center mx-auto">
      <figure className=" md:w-[282px] h-[181px] bg-[#F3F3F3] rounded-2xl">
        <img
          src={product_image}
          alt={product_title}
          className="object-cover w-[124px] h-[166px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <h3 className="font-bold text-2xl pt-2 text-black">
            {product_title}
          </h3>
        </h2>
        <p className="text-gray-500 text-xl font-medium pt-3">
          Price: {price} K
        </p>

        <div className="flex justify-start items-center">
          <Link to={`/products/${product_id}`}>
            <button className="border-2 border-solid hover:bg-gray-200 btn border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 text-xl font-bold text-[#9538E2] rounded-3xl bg-white btn-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
