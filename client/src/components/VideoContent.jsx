import { Ghost } from "lucide-react";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import UploadModal from "./UploadModal";

const VideoContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://vidyo-backend.vercel.app/api/post/allVideo",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();

        setVideo(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="mx-auto p-4 md:p-6">
      <div className="mt-4 flex flex-row items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0 font-poppins">
        <h1 className="mb-3 font-bold text-4xl text-gray-900">My Videos</h1>

        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="bg-blue-700 p-2 px-4 text-white rounded-md"
        >
          Upload Files
        </button>
        {showModal && (
          <div>
            <UploadModal setShowModal={setShowModal} />
          </div>
        )}
      </div>
      {video && video?.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-10">
          {video.map((item) => (
            <VideoCard
              key={item._id}
              title={item.title}
              source={item.video}
              id={item._id}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 m-6 flex flex-col items-center gap-2 font-poppins  py-20 md:py-40 rounded-lg border-dashed border-2 border-gray-700/30">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let&apos;s upload your first video.</p>
        </div>
      )}
    </main>
  );
};

export default VideoContent;
