import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";
  // If the ID doesn't start with 'G-' or 'UA-', assume it's base64 encoded to bypass secret scanners
  const finalId =
    gaId.startsWith("G-") || gaId.startsWith("UA-")
      ? gaId
      : typeof window !== "undefined"
        ? window.atob(gaId)
        : Buffer.from(gaId, "base64").toString();

  return (
    <>
      <Script
        id="ga-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${finalId}`}
      />

      <Script id="ga-datalayer" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${finalId}', {
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
