import { Clapperboard, LayoutDashboard, Settings } from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Video Upload",
    icon: Clapperboard,
    href: "/videos",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];
const Sidebar = () => {
  return (
    <div className=" py-4 flex flex-col h-full text-white ">
      <div className=" py-6 px-3 mx-auto">
        <img
          src="https://uploads-ssl.webflow.com/649330c3e40d813f90d8bb28/64bc18c92c9c6b8f88b0e3cf_footer-logo.svg"
          className="w-auto h-10 cursor-pointer"
        />
      </div>
      <div className="space-y-6 mt-20">
        {routes.map((route) => (
          <a
            key={route.label}
            href={route.href}
            className="font-poppins m-2 group flex p-3  justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
          >
            <div className="flex items-center flex-1">
              <route.icon className={`mr-2 ${route.color}`} />
              {route.label}
            </div>
          </a>
        ))}
      </div>
      <div className="p-4 mt-auto">
        <button className="bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 p-2 rounded-md text-white hover:scale-10 w-full">
          <h1 className="font-normal font-poppins">Log out</h1>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
