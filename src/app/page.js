import Contact from "./Contact/Contact";
import About from "./HomeLayout/About/About";
import Cards from "./HomeLayout/Cards/Cards";
import Choose from "./HomeLayout/Choose/Choose";
import Intro from "./HomeLayout/Intro/Intro";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Intro />
      <Choose />
      <Cards />
      <About />
      <Contact />
    </>
  );
}
