import React from "react";
import HappyFace from "../public/Assets/HappyFace.png";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Profile = () => {
  const { logout } = useMoralis();
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white px-6 py-4 rounded-xl gap-3">
      <div className="flex">
        <h2 className="mr-2 text-xl">Welcome</h2>
        <Image src={HappyFace} height="30" width={30} alt="emoji" />
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
