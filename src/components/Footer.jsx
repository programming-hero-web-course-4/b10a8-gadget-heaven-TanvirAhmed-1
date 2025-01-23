const Footer = () => {
    return (
      <div className="bg-white pt-11 text-black my-10 font-sora w-full mx-auto">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="font-bold md:text-5xl text-3xl">Gadget Heaven</h1>
          <p className="text-xl font-medium text-gray-400 px-4">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
  
        <footer className="footer text-gray-600 p-10 max-w-[1200px] mx-auto">
          <nav className="">
            <h6 className="font-bold text-xl text-black">Services</h6>
            <a className="link link-hover ">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className=" text-black font-bold text-xl">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className=" text-black font-bold text-xl">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="bg-[#9538E2] py-4 mt-9">
        <p className="text-white font-medium text-base text-center">&copy; 2025 Tanvir-Ahmed. All rights reserved.</p>
        </div>
      </div>
      
    );
  };
  
  export default Footer;
  