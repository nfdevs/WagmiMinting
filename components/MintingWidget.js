import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import contractAbi from "../public/config/ABI.json";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

const MintingWidget = ({
  incrementMintAmount,
  mintAmount,
  decrementMintAmount,
  donationAmount,

  setDonationAmount,
}) => {
  const { address } = useAccount();
  const [_mintAmount, _setMintAmount] = useState(1);

  useEffect(() => {
    _setMintAmount(mintAmount);
  }, [mintAmount]);

  const { config } = usePrepareContractWrite({
    address: "0xd41b1a1C2EF1239966D9F5De6a3ab0C8418fE94D",
    abi: contractAbi,
    functionName: "mint",
    args: [_mintAmount],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(String(donationAmount)),
    },
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(config);
  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const isMinted = txSuccess;

  return (
    <div className="flex flex-col">
      <div className="mt-5 flex justify-center mx-auto w-2/4">
        <label
          htmlFor="ethAmount"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="number"
            id="ethAmount"
            placeholder="0.0"
            onChange={(e) => setDonationAmount(e.target.value || 0)}
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
      <span className="text-md text-center my-2 text-zinc-900 font-Roboto">
        Max Mint Amount Per Transaction is 2.
      </span>

      <button
        className="mt-6 py-2 px-4 text-center text-white uppercase bg-zinc-500 border-b-4 border-zinc-700 rounded hover:bg-zinc-400 hover:border-zinc-500"
        onClick={() => mint?.()}
        disabled={!mint || isMintLoading || isMintStarted}
        data-mint-loading={isMintLoading}
        data-mint-started={isMintStarted}
      >
        {isMintLoading && "Waiting for approval"}
        {isMintStarted && !isMinted && "Minting..."}
        {!isMintLoading && !isMintStarted && "Mint"}
        {isMinted && "Mint"}
      </button>

      {mintError && (
        <p className="text-zinc-900 text-sm text-center font-Ralway my-5">
          Unexpected error occured.
        </p>
      )}
      {txError && (
        <p className="text-zinc-900 text-sm text-center font-Ralway my-5">
          Unexpected transaction error occured.
        </p>
      )}
      {isMinted && (
        <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}>
          <p className="my-3 text-sm border border-zinc-900 p-2 rounded-lg text-green-800 font-Ralway items-center flex text-center">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 h-5 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
              </svg>
            </span>
            Click to view on your transaction on Etherscan
          </p>
        </a>
      )}
    </div>
  );
};

export default MintingWidget;
