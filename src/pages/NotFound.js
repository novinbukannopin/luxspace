import React from "react";
import Header from "../parts/Header";
import { Link } from "react-router-dom";
import ErrorMessage from "../parts/ErrorMessage";
import Footer from "../parts/Footer";
import Sitemap from "../parts/Sitemap";

function NotFound() {
  return (
    <>
      <Header theme={"black"} />

      <ErrorMessage/>
      <Sitemap />
      <Footer />
    </>
  );
}

export default NotFound;
