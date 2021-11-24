import React, { useEffect } from "react";
//import BIRDS from "vanta/dist/vanta.birds.min";
import "./styles.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import About from "./Home/About";
import Partners from "./Home/Partners";
import Testimony from "./Home/Testimony";
import Fab from "./Fab";
import Speed from "./Home/Speed";

function Index() {
  /* const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);*/

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/619e70f66885f60a50bd635d/1fl9eihis";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      <main>
        <Header />
        <Hero />
      </main>
      <Services />
      <About />
      <Speed />
      <Fab />
      <Partners />
      <Testimony />
      <Footer />
    </>
  );
}

export default Index;
