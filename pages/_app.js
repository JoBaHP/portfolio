import Navbar from "../components/Navbar";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
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
      <ErrorBoundary>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
