import React from "react";

const PhotoCard = () => {
  return (
    <div className="relative block group">
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 h-25 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="opacity-0 w-full bg-black/50 rounded-lg  absolute inset-0 flex justify-center items-center z-10 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm p-2 font-Montserrat text-white">Tony Wayne</p>
      </div>
    </div>
  );
};

export default PhotoCard;
