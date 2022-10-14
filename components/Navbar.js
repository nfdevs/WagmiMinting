import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/context";

const Navbar = () => {
  const { isConnected, disconnect, connect } = useContext(UserContext);
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(isConnected);
  }, [isConnected]);
  return (
    <header className="text-zinc-100 bg-zinc-900 body-font">
      <div className="container mx-auto justify-between flex lg:flex-row sm:flex-col p-5">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 font-Roboto text-3xl text-zinc-100">
            Pakistan / Puerto Rico Charity
          </span>
        </a>

        {status ? (
          <button
            className="group relative inline-block focus:outline-none focus:ring"
            onClick={() => disconnect()}
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative font-Raleway inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Disconnect Wallet
            </span>
          </button>
        ) : (
          <button
            className="group relative inline-block focus:outline-none focus:ring"
            onClick={() => connect()}
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative font-Raleway inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Connect Wallet
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;