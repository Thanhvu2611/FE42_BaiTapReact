import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ListPhone from "./ListPhone";
import ListLaptop from "./ListLaptop";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <ListPhone />
      <ListLaptop />
      <Footer />
    </div>
  );
}
