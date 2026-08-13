import { Collab } from "./components/Collab";
import { Connect } from "./components/Connect";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Nav } from "./components/Nav";
import { Partners } from "./components/Partners";
import { Practice } from "./components/Practice";
import { Share } from "./components/Share";
import { Stories } from "./components/Stories";
import { Ticker } from "./components/Ticker";
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
        <Ticker />
        <Identity />
        <Share />
        <Partners />
        <Collab />
        <Practice />
        <Stories />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
