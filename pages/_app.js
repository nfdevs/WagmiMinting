import "../styles/globals.css";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { UserProvider } from "../context/context";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
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
