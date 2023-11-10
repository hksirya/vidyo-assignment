import MobileSidebar from "../components/MobileSidebar";
import SettingsContent from "../components/SettingsContent";
import Sidebar from "../components/sidebar";

const SettingsPage = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex  md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <div className="md:hidden flex">
        <MobileSidebar />
      </div>
      <main className="md:pl-72">
        <SettingsContent />
      </main>
    </div>
  );
};

export default SettingsPage;
