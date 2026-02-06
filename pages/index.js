import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jovan Raosavljevic | ServiceNow Developer & Full-Stack Engineer</title>
        <meta name="description" content="ServiceNow developer and full-stack engineer specializing in JavaScript, React, Node.js, and web development. View my portfolio and projects." />
        <meta name="keywords" content="ServiceNow, Full-Stack Developer, JavaScript, React, Node.js, Web Development, Portfolio, Jovan Raosavljevic" />
        <meta name="author" content="Jovan Raosavljevic" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jovanportfolio.netlify.app/" />
        <meta property="og:title" content="Jovan Raosavljevic | ServiceNow Developer & Full-Stack Engineer" />
        <meta property="og:description" content="ServiceNow developer and full-stack engineer specializing in JavaScript, React, Node.js, and web development. View my portfolio and projects." />
        <meta property="og:image" content="https://jovanportfolio.netlify.app/assets/personal.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jovanportfolio.netlify.app/" />
        <meta property="twitter:title" content="Jovan Raosavljevic | ServiceNow Developer & Full-Stack Engineer" />
        <meta property="twitter:description" content="ServiceNow developer and full-stack engineer specializing in JavaScript, React, Node.js, and web development. View my portfolio and projects." />
        <meta property="twitter:image" content="https://jovanportfolio.netlify.app/assets/personal.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://jovanportfolio.netlify.app/" />

        {/* AI Crawler Hints */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />

        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jovan Raosavljevic Portfolio",
              url: "https://jovanportfolio.netlify.app/",
              description: "Portfolio website of Jovan Raosavljevic, ServiceNow Developer & Full-Stack Engineer",
              author: {
                "@type": "Person",
                name: "Jovan Raosavljevic"
              }
            }),
          }}
        />

        {/* Structured Data - ProfilePage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                "@id": "https://jovanportfolio.netlify.app/#person",
                name: "Jovan Raosavljevic",
                url: "https://jovanportfolio.netlify.app/",
                image: "https://jovanportfolio.netlify.app/assets/personal.jpg",
                jobTitle: "ServiceNow Developer & Full-Stack Engineer",
                description: "ServiceNow developer and full-stack engineer specializing in JavaScript, React, Node.js, and web development.",
                sameAs: [
                  "https://www.linkedin.com/in/jovan-raosavljevic/",
                  "https://github.com/JoBaHP"
                ],
                email: "jovan@build-up.us",
                knowsAbout: [
                  "ServiceNow",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Full-Stack Development",
                  "Web Development"
                ]
              }
            }),
          }}
        />

        {/* Structured Data - Skills ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Technical Skills",
              description: "Technical skills and expertise of Jovan Raosavljevic",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ServiceNow" },
                { "@type": "ListItem", position: 2, name: "AngularJS" },
                { "@type": "ListItem", position: 3, name: "HTML & CSS" },
                { "@type": "ListItem", position: 4, name: "JavaScript" },
                { "@type": "ListItem", position: 5, name: "React" },
                { "@type": "ListItem", position: 6, name: "GitHub" },
                { "@type": "ListItem", position: 7, name: "Node.js" },
                { "@type": "ListItem", position: 8, name: "Firebase" },
                { "@type": "ListItem", position: 9, name: "MongoDB" },
                { "@type": "ListItem", position: 10, name: "Tailwind CSS" },
                { "@type": "ListItem", position: 11, name: "AWS" },
                { "@type": "ListItem", position: 12, name: "Next.js" }
              ]
            }),
          }}
        />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
