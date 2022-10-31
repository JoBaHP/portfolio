import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ThemeToogle from "../context/ThemeToogle";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Jovan | Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ThemeToogle
        className=" dark:bg-black dark:text-gray-100 w-full h-16 z-20  border-white
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-2xl"
      />
    </div>
  );
}
