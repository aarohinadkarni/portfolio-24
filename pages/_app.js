import "@/styles/globals.css";
import Layout from "@/components/Layout/layout";

export default function App({ Component, pageProps }) {
  return (
      <div className="bg-off-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
  );

}
