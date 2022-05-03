import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps, appId, serverUrl }) {
  return (
    <MoralisProvider
      appId="WiiRyOw8dcAtDp8fncoZbcUZqJa3P6rudZnG2E8f"
      serverUrl="https://xztpj7you4ln.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

// export const getStaticProps = () => {
//   return {
//     appId: process.env.MORALIS_APP_ID,
//     serverUrl: process.env.MORALIS_SERVER_URL,
//   };
// };
