import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const apidata = useLoaderData();
  console.log(apidata);

  const bardata = apidata.map((data) => ({
    name: data.product_title,
    price: data.price,
  }));

  console.log(bardata);

  return (
    <div className="font-sora bg-gray-300 pb-20">
      <div className="max-w-[1600px] mx-auto bg-[#9538E2] pt-10 pb-20 mb-10">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold py-2 text-white text-center">
          Statistics
        </h1>
        <p className="md:w-[794px] mx-auto text-xl font-normal text-gray-200 text-center pt-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto ">
        <h2 className="text-4xl font-bold text-black md:text-start text-center">
          Statistics
        </h2>
        <div className="bg-white p-8 rounded-2xl my-10">
          <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer>
              <BarChart
                data={bardata}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#9538E2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
