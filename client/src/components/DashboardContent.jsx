const DashboardContent = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center mx-auto p-8 m-8 ">
      <h1 className="flex text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 font-poppins ">
        Welcome to Vidyo.ai
      </h1>

      <h1 className=" text-lg font-normal text-gray-500 font-poppins">
        Make Short Videos From Long Ones Instantly
      </h1>

      <video autoPlay loop muted playsInline className="h-30">
        <source
          src="https://website-assets.vidyo.ai/hero_section.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default DashboardContent;
