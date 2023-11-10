import React, { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import { useParams } from "react-router-dom";

const VideoDataContent = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const wavesurferRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [wavesurferReady, setWavesurferReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  const handleCanvasClick = useCallback(() => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  }, [isPlaying]);

  const playVideo = () => {
    const video = videoRef.current;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Automatic playback started!");
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Auto-play was prevented:", error);
        });
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    video.pause();
    setIsPlaying(false);
  };

  const initializeWavesurfer = useCallback(() => {
    const wavesurferInstance = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "blue",
      progressColor: "darkBlue",
      height: 60,
      responsive: true,
    });

    wavesurferInstance.on("ready", () => {
      console.log("Wavesurfer is ready");
      setWavesurferReady(true);
    });

    return wavesurferInstance;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const video = videoRef.current;
    video.src = postData?.video;
    video.preload = "none";
    video.autoPlay = false; // Pause the video initially

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Automatic playback started!");
        })
        .catch((error) => {
          console.error("Auto-play was prevented:", error);
        });
    }

    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      setDuration(video.duration);
    });

    const drawFrame = () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawFrame);
    };

    video.addEventListener("play", () => {
      drawFrame();
    });

    video.addEventListener("canplaythrough", () => {
      video.pause();
    });

    const wavesurfer = initializeWavesurfer();

    return () => {
      video.pause();
      wavesurfer.destroy();
    };
  }, [postData, initializeWavesurfer]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/api/post/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data.data.title);
          setPostData(data.data);
        } else {
          console.error("Request failed with status: " + response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    // Play the video when Wavesurfer is ready
    if (wavesurferReady) {
      playVideo();
    }
  }, [wavesurferReady]);

  return (
    <div className="p-10">
      <div className="flex w-full justify-center">
        <h1 className="flex md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 font-poppins mb-4">
          {postData?.title}
        </h1>
      </div>

      <canvas
        ref={canvasRef}
        className="h-96 w-108 justify-center items-center mx-auto border rounded-md p-4"
        onClick={handleCanvasClick}
      ></canvas>

      <div className="flex justify-center mt-2">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded font-poppins font-semibold"
          onClick={handleCanvasClick}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div ref={wavesurferRef} className="bg-blue-400/20 rounded-md p-2 mt-4" />

      <video ref={videoRef} className="hidden" autoPlay={false} controls />
    </div>
  );
};

export default VideoDataContent;
