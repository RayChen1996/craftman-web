import React from "react";
import indexPng from "@/../public/images/index-1.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div>
          <div className="text-5xl font-bold text-black">
            Enjoy Your Minimalist Lifestyle.
          </div>
          <p className="mb-12 mt-6">
            The best crafts in Taiwan. Get your free shipping on the first
            order.
          </p>
          <button className="btn btn-primary">Shop now</button>
        </div>
        <Image alt="" src={indexPng} className="object-cover" />
      </div>
    </section>
  );
}
