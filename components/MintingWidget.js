import React, { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import contractAbi from "../public/config/ABI.json";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { goerli } from "wagmi/chains";

const MintingWidget = ({
  incrementMintAmount,
  mintAmount,
  decrementMintAmount,
  donationAmount,
  isMinting,
  setDonationAmount,
}) => {
  const { address } = useAccount();
  const [_mintAmount, _setMintAmount] = useState(1);

  useEffect(() => {
    _setMintAmount(mintAmount);
  }, [mintAmount]);

  const { config, error } = usePrepareContractWrite({
    address: "0xFac9E5A154E58c3f2C321ba52166e36968f0670F",
    abi: contractAbi,
    functionName: "mint",
    args: [_mintAmount],
    chainId: goerli.id,
  });
  const { write } = useContractWrite(config);

  return (
    <div className="flex flex-col">
      <div className="mt-5 flex justify-center mx-auto w-2/4">
        <label
          htmlFor="ethAmount"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="ethAmount"
            id="UserEmail"
            placeholder="0.0"
            onChange={(e) => setDonationAmount(e.target.value)}
            className="peer h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  text-lg "
          />

          <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Donation Amout
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-6 text-3xl font-bold text-gray-200">
        <button
          className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-zinc-200 text-center"
          onClick={decrementMintAmount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        </button>
        <h2 className="mx-8 text-zinc-900">{mintAmount}</h2>

        <button
          className="flex items-center justify-center w-12 h-12 bg-white rounded-md text-black hover:bg-zinc-200 text-center"
          onClick={incrementMintAmount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      <h4 className="mt-2 font-bold text-center text-zinc-900">
        {donationAmount} ETH{" "}
        <span className="text-sm text-zinc-500"> + GAS</span>
      </h4>

      <button
        className="mt-6 py-2 px-4 text-center text-white uppercase bg-zinc-500 border-b-4 border-zinc-700 rounded hover:bg-zinc-400 hover:border-zinc-500"
        disabled={!write}
        onClick={() => {
          write?.();
          isMinting(true);
        }}
      >
        {isMinting ? "Minting..." : "Mint"}
      </button>
      {error && (
        <div>
          <span className="text-black">
            An error occurred preparing the transaction {error.message}
          </span>
        </div>
      )}
    </div>
  );
};

export default MintingWidget;
