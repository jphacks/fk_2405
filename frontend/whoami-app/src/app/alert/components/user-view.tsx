"use client";
import { useState } from "react";

export const UserView = ({ username }: { username: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="w-[90vw] mx-[5vw] h-16 bg-white flex items-center justify-between font-bold">
          <div className="flex items-center">
            <h1 className="text-xl my-4">No.32</h1>
            <h1 className="text-xl my-4 ml-4">{username}</h1>
          </div>
          <div
            className="px-2 py-1 bg-custom_blue text-white rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            <h1>また話す！</h1>
          </div>
        </div>
      )}
    </div>
  );
};
