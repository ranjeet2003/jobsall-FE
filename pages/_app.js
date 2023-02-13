import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/AdminForm.scss";
import "../styles/singlePost.scss";
import "../styles/loader.scss";
import "../styles/Footer.scss";
import "../styles/ContactUs.scss";
import "../styles/AboutUs.scss";
import "../styles/Tnc.scss";
import Layout from "../components/layout";
import Context from "../context/PostContext";
import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=900" />
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5QQHDRGRF5"
        strategy="afterInteractive"
      />
         <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5QQHDRGRF5');
        `}
      </Script>
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
