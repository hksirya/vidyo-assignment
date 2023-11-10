import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto space-y-10 mt-20 pb-20 ">
      <div className="flex max-w-2xl ">
        <h1 className="text-4xl md:text-7xl font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 font-poppins  font-bold text-center ">
          Make Short Videos From Long Ones Instantly
        </h1>
      </div>
      <p className="font-poppins text-gray-300 text-normal md:text-xl text-center">
        Get social ready clips, cut & captioned by AI. Save 90% time and effort
      </p>
      <div>
        <a
          href="/dashboard"
          className="flex flex-row bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 p-2 rounded-md px-8 text-white hover:scale-10 w-full "
        >
          <h1 className="font-normal font-poppins">Go to Dashboard</h1>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Hero;
