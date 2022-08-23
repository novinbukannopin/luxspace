import React from "react";
import Header from "../parts/Header";
// import Hero from "../parts/Hero";
// import BrowserRoom from "../parts/Homepage/BrowserRoom";
// import JustArrived from "../parts/Homepage/JustArrived";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb/index";
import ProductDetail from "../parts/Details/ProductDetail";
import Suggestion from "../parts/Details/Suggestion";
import Sitemap from "../parts/Sitemap";
import Clients from "../parts/Clients";

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
      <ProductDetail />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
