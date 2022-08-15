import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowserRoom from "../parts/Homepage/BrowserRoom";
import JustArrived from "../parts/Homepage/JustArrived";

export default function Homepage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowserRoom />
      <JustArrived />
    </>
  );
}
