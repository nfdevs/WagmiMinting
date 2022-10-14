import React, { createContext, useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { chain } from "wagmi";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { address, isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new MetaMaskConnector({
      chains: [chain.mainnet, chain.goerli],
    }),
  });
  const { disconnect } = useDisconnect();

  return (
    <UserContext.Provider value={{ disconnect, connect, isConnected }}>
      {children}
    </UserContext.Provider>
  );
};
