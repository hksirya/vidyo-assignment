const Navbar = () => {
  return (
    <div className="flex flex-row max-w-6xl justify-between items-center mx-auto p-10">
      <img
        src="https://uploads-ssl.webflow.com/649330c3e40d813f90d8bb28/64bc18c92c9c6b8f88b0e3cf_footer-logo.svg"
        className="w-auto h-10 cursor-pointer"
      />

      <button className="bg-blue-600 p-2 px-4 rounded-lg">
        <a
          href="/dashboard"
          className="font-poppins font-normal md:font-lg text-white"
        >
          Get Started
        </a>
      </button>
    </div>
  );
};

export default Navbar;
