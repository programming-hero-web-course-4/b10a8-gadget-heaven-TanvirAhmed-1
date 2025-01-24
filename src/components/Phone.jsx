import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./product";

const Phone = () => {
  const apidata = useLoaderData();
  console.log(apidata);

  const onlyPhoneData = apidata.filter(
    (value) => value.category === "Smartphone"
  );
  console.log(onlyPhoneData);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-10 gap-4 md:gap-x-4'>
        {
        onlyPhoneData.map(value=><Product
              key={value.product_id}
            product={value}
        ></Product>)
}
      </div>
    </div>
  );
};

export default Phone;
