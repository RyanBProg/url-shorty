import "./App.scss";
import NavBar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";
import UrlForm from "./components/url-form/UrlForm";
import StatsBanner from "./components/stats-banner/StatsBanner";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <UrlForm />
      <StatsBanner />
    </>
  );
}

export default App;
