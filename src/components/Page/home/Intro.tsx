import React from "react";
import png from "@/../public/images/index-5.jpg";
import Image from "next/image";
import { archivo_black } from "@/fonts";
import clsx from "clsx";
export default function Intro() {
  return (
    <section className="">
      <figure className="relative min-h-[400px]">
        <Image alt="" src={png} fill className="w-full object-cover" />
        <div className="container relative grid grid-cols-1 justify-between pt-[150px] lg:flex">
          <div
            className={clsx(
              "text-5xl font-bold text-white",
              archivo_black.variable,
            )}
          >
            “I want to make the life <br /> more simple by crafts.”
          </div>
          <div>
            <div>Art Director</div>
            <div className="text-white">hsiao-Ming Chen</div>
            <div className="mt-4 flex gap-5 text-[#0E8A00]">
              <a>Instagram</a>
              <a>Twitter</a>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}
