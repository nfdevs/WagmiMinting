import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { UserProvider } from "../context/context";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </WagmiConfig>
  );
}

export default MyApp;
