import { Trash } from "lucide-react";
import VideoThumbnail from "react-video-thumbnail";

// eslint-disable-next-line react/prop-types
const VideoCard = ({ id, title, source }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-md p-4 cursor-pointer hover:shadow-lg border border-gray-400/40">
      {/* Display Thumbnail */}
      <a href={`/dashboard/${id}`} className="flex flex-col ">
        <div className="flex-1 w-full h-20 rounded-lg  ">
          <VideoThumbnail
            videoUrl={source}
            thumbnailHandler={(thumbnail) => console.log(thumbnail)}
          />
        </div>

        <div className="px-1 py-4 flex justify-between mb-2">
          {/* Title */}
          <div className="font-bold text-xl  font-poppins">{title}</div>
          <div className=" ">
            <Trash className="h-4 w-4 text-red-800 mt-2" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
