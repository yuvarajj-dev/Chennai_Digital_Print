import About from "./HomeLayout/About/About";
import Choose from "./HomeLayout/Choose/Choose";
import Intro from "./HomeLayout/Intro/Intro";
import Product from "./HomeLayout/Product/Product";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <> 
      <Intro />
      <Choose />
      <About />
      <Product/>
    </>
  );
}
