import { Chapters } from "./components/Chapters";
import { Connect } from "./components/Connect";
import { Creator } from "./components/Creator";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Instagram } from "./components/Instagram";
import { Materials } from "./components/Materials";
import { Nav } from "./components/Nav";
import { Now } from "./components/Now";
import { Partners } from "./components/Partners";
import { Practice } from "./components/Practice";
import { Recommendations } from "./components/Recommendations";
import { Share } from "./components/Share";
import { Stories } from "./components/Stories";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#inicio">
        Pular para o conteúdo
      </a>
      <Nav />
      <main>
        <Hero />
        <Identity />
        <Now />
        <Share />
        <Creator />
        <Practice />
        <Stories />
        <div id="explorar">
          <Materials />
          <Partners />
          <Recommendations />
        </div>
        <Instagram />
        <Chapters />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
