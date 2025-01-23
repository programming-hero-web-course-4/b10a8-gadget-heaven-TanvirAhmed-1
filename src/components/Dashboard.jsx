import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getStorbuy, getStorwish } from "../savedata";
import Group from "../../assets/Group.png";

const Dashboard = () => {
  const [price, setPrice] = useState();

  const [data, setData] = useState([]);
  const [wishdata, setWishData] = useState([]);
  const apidata = useLoaderData();

  useEffect(() => {
    const savedData = getStorbuy();
    if (apidata && savedData) {
      const findProduct = apidata.filter((item) =>
        savedData.includes(item.product_id)
      );
      setData(findProduct);
    }
  }, [apidata]);

  useEffect(() => {
    const savedData = getStorwish();
    if (apidata && savedData) {
      const findProduct = apidata.filter((item) =>
        savedData.includes(item.product_id)
      );
      setWishData(findProduct);
    }
  }, [apidata]);

  // Remove product from cart
  const removeFromCart = (productId) => {
    setData((prevData) =>
      prevData.filter((item) => item.product_id !== productId)
    );
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishData((prevData) =>
      prevData.filter((item) => item.product_id !== productId)
    );
  };

  // Sort items by price
  
  const sortCartByPrice = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  };
  const sortWishlistByPrice = () => {
    const sorted = [...wishdata].sort((a, b) => a.price - b.price);
    setWishData(sorted);
  };

  // Placeholder purchase functionality
  const handlePurchase = () => {
    alert("Purchase functionality coming soon!");
  };
  // Calculate total cost for cart and wishlist
  const totalCartCost = data.reduce((acc, item) => acc + item.price, 0);
  const totalWishCost = wishdata.reduce((acc, item) => acc + item.price, 0);

  // popup section

  const popup = (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white rounded-3xl font-sora ">
          <div className=" text-center ">
            <div className="flex justify-center items-center py-4">
              <img src={Group} alt="" />
            </div>
            <h3 className="text-2xl text-center font-bold text-black">
              Payment Successfully
            </h3>
            <p className="py-4 text-center font-semibold text-xl text-gray-600">
              Thanks for purchasing.
            </p>
            <p className="font-semibold text-center text-xl text-gray-600">
              Total:{price ? totalWishCost : totalCartCost}
            </p>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn ">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="font-sora">
      <div className=" max-w-[1600px] h-[375px] mx-auto bg-[#9538E2] pt-10">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold py-2 text-white text-center">
          Product Details
        </h1>
        <p className="md:w-[794px] mx-auto text-xl font-normal text-gray-200 text-center md:pb-20 pb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="  max-w-[1600px] mx-auto ">
        <Tabs>
          <TabList className="flex  mt-[-150px] max-w-[1600px]  justify-center items-center gap-4 pb-40 bg-[#9538E2]">
            <Tab>
              <button className="px-8 py-3 text-xl font-semibold rounded-full hover:bg-white hover:border-white hover:text-[#9538E2] text-white bg-[#9538E2] border-2 border-solid border-white">
                Cart
              </button>
            </Tab>
            <Tab>
              <button className="px-8 py-3 text-xl font-semibold rounded-full hover:bg-white hover:border-white hover:text-[#9538E2] text-white bg-[#9538E2] border-2 border-solid border-white">
                Wishlist
              </button>
            </Tab>
          </TabList>

          {/* Cart Tab */}

          <TabPanel>
            <div className="bg-gray-100 p-6 mt-6 rounded-lg max-w-[1280px] mx-auto">
              <div className=" md:flex justify-between items-center mb-6">
                <h2 className="text-black font-bold text-2xl">
                  Cart ({data.length})
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <p className="text-black font-bold text-2xl">
                    Total cost: ${totalCartCost.toFixed(2)}
                  </p>
                  <div className="flex gap-6">
                    <button
                      onClick={sortCartByPrice}
                      className="py-3 px-6 text-xl font-semibold text-[#9538E2] bg-gray-300 rounded-full hover:bg-white"
                    >
                      <div className="flex gap-3">
                        Sort by Price
                        <img
                          className="w-4 object-cover"
                          src="https://img.icons8.com/?size=100&id=MmupZtPbnw66&format=png&color=000000"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </button>
                    <label
                      onClick={() => setPrice(false)}
                      htmlFor="my_modal_6"
                      className="py-3 px-6 text-xl font-semibold text-white bg-[#9538E2] rounded-full hover:text-[#9538E2] hover:bg-white"
                    >
                      Purchase
                    </label>
                  </div>

                  {popup}
                </div>
              </div>
              <div>
                {data.length > 0 ? (
                  <div className="grid grid-rows-1  gap-6">
                    {data.map((item) => (
                      <div
                        key={item.product_id}
                        className="p-4 grid lg:grid-cols-5  md:grid-cols-4 gap-6 g:gap-6 md:gap-20 l justify-start items-center bg-white shadow rounded-lg "
                      >
                        <div className="w-[200px] h-[150px] p-4 bg-gray-400 flex justify-center items-center rounded-3xl mx-auto">
                          <img
                            className="w-40 object-cover  p-4 rounded-3xl"
                            src={item.product_image}
                            alt={item.product_title}
                          />
                        </div>
                        <div className="lg:col-span-3 md:col-span-2 text-center md:text-start">
                          <h3 className="text-2xl font-semibold text-black mb-2">
                            {item.product_title}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-600">
                            {item.description}
                          </h4>
                          <p className="text-xl text-gray-600 mb-2">
                            Price: ${item.price}
                          </p>
                        </div>
                        <div className=" flex justify-center md:justify-start">
                          <button
                            onClick={() => removeFromCart(item.product_id)}
                            className="py-2 px-4  text-white bg-[#9538E2] rounded-full hover:bg-purple-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600 text-xl">
                    Your cart is empty.
                  </p>
                )}
              </div>
            </div>
          </TabPanel>

          {/* Wishlist Tab */}
          <TabPanel>
            <div className="bg-gray-100 p-6 mt-6 rounded-lg mx-w-[1280px] mx-auto">
              <div className="md:flex justify-between items-center mb-6">
                <h2 className="text-black font-bold text-2xl">
                  Wishlist ({wishdata.length})
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <p className="text-black font-bold text-2xl">
                    Total cost: ${totalWishCost.toFixed(2)}
                  </p>
                  <div className="flex gap-6">
                    <button
                      onClick={sortWishlistByPrice}
                      className="py-3 px-6 text-xl font-semibold text-[#9538E2] bg-gray-300 rounded-full hover:bg-white"
                    >
                      Sort by Price
                    </button>
                    <label
                      onClick={() => setPrice(true)}
                      htmlFor="my_modal_6"
                      className="py-3 px-6 text-xl font-semibold text-white bg-[#9538E2] rounded-full hover:text-[#9538E2] hover:bg-white"
                    >
                      Purchase
                    </label>
                  </div>
                  {popup}
                </div>
              </div>
              <div>
                {wishdata.length > 0 ? (
                  <div className="grid grid-rows-1 gap-6">
                    {wishdata.map((item) => (
                      <div
                        key={item.product_id}
                        className="p-4 md:flex md:gap-20  md:justify-start items-center bg-white shadow rounded-lg"
                      >
                        <div className="w-[200px] h-[150px] p-4 bg-gray-400 flex justify-center items-center rounded-3xl mx-auto">
                          <img
                            className="w-40 object-cover  p-4 rounded-3xl"
                            src={item.product_image}
                            alt={item.product_title}
                          />
                        </div>
                        <div className="text-center mt-3 md:mt-0">
                          <h3 className="text-2xl font-semibold text-black mb-2 ">
                            {item.product_title}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-600">
                            {item.description}
                          </h4>
                          <p className="text-xl text-gray-600 mb-2">
                            Price: ${item.price}
                          </p>
                          <button className="py-2 px-4 text-white bg-[#9538E2] rounded-full hover:bg-purple-600">
                            Add to Card
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600 text-xl">
                    Your wishlist is empty.
                  </p>
                )}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
