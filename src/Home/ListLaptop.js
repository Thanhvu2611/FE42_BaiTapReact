import React from "react";
import BestLaptop from "./BestLaptop";

export default function ListLaptop() {
  return (
    <section
      id="laptop"
      className="container-fluid pt-5 pb-5 bg-light text-dark"
    >
      <h1 className="text-center">BEST LAPTOP</h1>
      <div className="row">
        <BestLaptop />
        <BestLaptop />
        <BestLaptop />
        <BestLaptop />
      </div>
    </section>
  );
}
