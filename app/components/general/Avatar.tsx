import React from "react";
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
  image?: string;
}
function Avatar({ image }: AvatarProps) {
  return (
    <div>
      {image ? (
        <img src={image} alt="Avatar" className="rounded-full" />
      ) : (
        <div className="bg-gray-300 rounded-full w-12 h-12">
          <RxAvatar size={25} />
        </div>
      )}
    </div>
  );
}

export default Avatar;
