import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="ga-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-datalayer" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
