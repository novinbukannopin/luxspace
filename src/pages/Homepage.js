import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowserRoom from "../parts/Homepage/BrowserRoom";
import JustArrived from "../parts/Homepage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function Homepage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme={"white"} position={"absolute"} />
      <Hero />
      <BrowserRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
