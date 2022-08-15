import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowserRoom from "../parts/Homepage/BrowserRoom";
import JustArrived from "../parts/Homepage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Homepage() {
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
