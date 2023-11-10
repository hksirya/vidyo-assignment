import MobileSidebar from "../components/MobileSidebar";
import VideoDataContent from "../components/VideoDataContent";
import Sidebar from "../components/sidebar";

const VideoDisplayPage = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex  md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <div className="md:hidden flex">
        <MobileSidebar />
      </div>
      <main className="md:pl-72">
        <VideoDataContent />
      </main>
    </div>
  );
};

export default VideoDisplayPage;
