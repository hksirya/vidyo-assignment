import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center p-4 w-full border-b shadow-md">
      <div></div>
      <div className="">
        <img
          src="https://assets-global.website-files.com/649330c3e40d813f90d8bb28/64be5ae91189edd27be9d79b_CTA-logo-min.webp"
          className="h-6 w-auto"
        />
      </div>

      <div>
        {toggle ? (
          <X
            onClick={() => setToggle(!toggle)}
            className="md:hidden h-8 w-8 cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setToggle(!toggle)}
            className="md:hidden h-8 w-8 cursor-pointer"
          />
        )}
      </div>
      {toggle && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-[100] ease-in-out ${
            toggle ? "ease-in duration-500" : "ease-in duration-500"
          }`}
        >
          {/* Your menu content goes here */}
          <Sidebar />
        </div>
      )}

      <div
        onClick={(prev) => setToggle(!prev)}
        className={
          toggle
            ? "md:hidden fixed left-0 top-0 w-full min-h-screen bg-black/20 z-10  "
            : "fixed left-[-100%] top-0  "
        }
      />
    </div>
  );
};

export default MobileSidebar;
