import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/AdminForm.scss";
import "../styles/singlePost.scss";
import "../styles/loader.scss";
import "../styles/Footer.scss";
import Layout from "../components/layout";
import Context from "../context/PostContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=900" />
      </Head>
      <Context>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </>
  );
}

export default MyApp;
