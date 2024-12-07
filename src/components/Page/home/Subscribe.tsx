import Image from "next/image";
import React from "react";
import footerJpg from "@/../public/images/footer.jpg";
import { archivo_black } from "@/fonts";
import clsx from "clsx";
export default function Subscribe() {
  return (
    <section className="relative">
      <figure className="relative min-h-[400px]">
        <Image alt="" src={footerJpg} fill className="w-full object-cover" />
        <form className="container relative top-1/2 translate-y-40">
          <h2
            className={clsx(
              "text-5xl font-bold text-white",
              archivo_black.variable,
            )}
          >
            Subscribe for news and special offers!
          </h2>
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="input input-lg input-ghost input-bordered lg:mt-12"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>
      </figure>
    </section>
  );
}
