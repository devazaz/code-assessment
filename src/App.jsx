import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import bannerbg from "./assets/bannerbg.svg";
import Logos from "./components/Logos";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import Service4 from "./components/Service4";
import Service5 from "./components/Service5";
import Advantage from "./components/Advantage";
import Faq from "./components/Faq";
import HiringProcess from "./components/HiringProcess";
import MySwiper from "./components/Swiper";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerbg})` }}
      >
        <Header />
        <Banner />
      </div>
      <Logos />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Advantage />
      <Faq />
      <MySwiper />
      <HiringProcess />
      <Footer />
    </>
  );
}

export default App;
