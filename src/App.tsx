import "./App.scss";
import NavBar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";
import UrlForm from "./components/url-form/UrlForm";
import StatsBanner from "./components/stats-banner/StatsBanner";
import CtaBanner from "./components/cta-banner/CtaBanner";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { Link } from "./utils/types";

const demoData = [
  {
    link: "https://www.google.com/images",
    shortLink: "https://rel.link/gjo345",
  },
  {
    link: "https://www.google.com/",
    shortLink: "https://rel.link/ayl285",
  },
  {
    link: "https://www.google.com/",
    shortLink: "https://rel.link/ayl285",
  },
];

function App() {
  const [links, setLinks] = useState<Link[]>(demoData);

  return (
    <>
      <NavBar />
      <Hero />
      <UrlForm links={links} setLinks={setLinks} />
      <StatsBanner />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default App;
