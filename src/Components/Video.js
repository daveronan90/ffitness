import React from "react";

const Video = ({source}) => {
  return (
    <video
      src={process.env.PUBLIC_URL + source}
      loop
      muted
      autoPlay
      disablePictureInPicture
      disableRemotePlayback
      className="w-full"
    ></video>
  );
};

export default Video;
