import React from "react";
import Header from "../parts/Header";
// import Hero from "../parts/Hero";
// import BrowserRoom from "../parts/Homepage/BrowserRoom";
// import JustArrived from "../parts/Homepage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb/index";

export default function Details() {
  return (
    <>
      <Header theme={"black"} />
      <Breadcrumb
        list={[
          {
            url: "/",
            name: "Home",
          },
          {
            url: "/categories/91231",
            name: "Office Room",
          },
          {
            url: "/categories/91231/products/7888",
            name: "Details",
          },
        ]}
      />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
