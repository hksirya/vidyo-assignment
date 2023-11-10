import { Cloud, X } from "lucide-react";
import { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/firebase";

const postVideo = async (file) => {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(file),
    });

    await response.json();
    alert("Success");
  } catch (error) {
    alert(error);
  }
};

const handleClick = async (
  selectedVideo,
  setSelectedVideo,
  setIsSuccess,
  setIsUploading
) => {
  if (selectedVideo === null) alert("Please upload a video!");

  console.log(selectedVideo);

  const fileRef = ref(storage, `videos/${selectedVideo.name}`);

  const uploadTask = uploadBytesResumable(fileRef, selectedVideo);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setIsUploading(true);
      console.log(progress);
    },
    (error) => {
      console.error(error);
    },
    async () => {
      // Upload is complete, get the download URL
      try {
        const downloadURL = await getDownloadURL(fileRef);
        console.log("Download URL:", downloadURL);
        setSelectedVideo(null);
        const newVideo = {
          title: selectedVideo.name,
          video: downloadURL,
        };
        postVideo(newVideo);
        setIsSuccess(true);

        // Now you can use the download URL as needed, for example, save it to state or display it to the user.
      } catch (error) {
        console.error("Error getting download URL:", error);
      }
      setIsUploading(false);
    }
  );
};

// eslint-disable-next-line react/prop-types
function UploadDropzone({ selectedVideo, setSelectedVideo }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);

    video.onloadedmetadata = () => {
      // Check if the video has an audio track
      if (video.mozHasAudio || "webkitAudioDecodedByteCount" in video) {
        setSelectedVideo(file);
      } else {
        alert(
          "Selected video has no audio track. Please choose another video."
        );
      }
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/mp4",
    onDrop,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
      >
        <input {...getInputProps()} />
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
            <p className="mb-2 text-sm text-zinc-700">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-zinc-500">PDF (up to 50 MB)</p>
          </div>
        </label>
      </div>
      <p className="font-poppins text-sm text-zinc-400">
        Note: Please upload a video with audio
      </p>
      {selectedVideo && (
        <div className="mt-4">
          <p className="text-green-500">Video selected: {selectedVideo.name}</p>
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const UploadModal = ({ setShowModal }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold mr-4">Upload your video</h3>
              <button
                onClick={() => setShowModal((prev) => !prev)}
                className="flex items-center border border-gray-900 rounded-full p-1"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <UploadDropzone
                selectedVideo={selectedVideo}
                setSelectedVideo={setSelectedVideo}
              />
            </div>
            <div className="flex mx-auto">
              {isSuccess && (
                <h1 className="font-poppins text-gray-800">
                  Your file is uploaded .
                  <a href="/videos" className="text-blue-600 underline">
                    Go to Dashboard
                  </a>
                </h1>
              )}
            </div>
            <div className="p-4 mt-auto">
              <button
                onClick={() =>
                  handleClick(
                    selectedVideo,
                    setSelectedVideo,
                    setIsSuccess,
                    setIsUploading
                  )
                }
                className="bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 p-2 rounded-md text-white hover:scale-10 w-full mt-4"
              >
                <h1 className="font-normal font-poppins">
                  {isUploading ? "Uploading..." : "Upload video "}
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-black backdrop-blur-sm"></div>
    </>
  );
};

export default UploadModal;
