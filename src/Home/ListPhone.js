import React from "react";
import BestPhone from "./BestPhone";

export default function ListPhone() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <BestPhone />
        <BestPhone />
        <BestPhone />
        <BestPhone />
      </div>
    </section>
  );
}
