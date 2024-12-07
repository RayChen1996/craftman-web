import React from "react";
import { italianno } from "@/fonts";
import clsx from "clsx";
import { options } from "@/option";
import Link from "next/link";
export default function AppHeader() {
  return (
    <header className="navbar container">
      <div
        className={clsx(
          italianno.variable,
          "navbar-start font-black italic lg:text-3xl",
        )}
      >
        Craftsman
      </div>
      {/* <div className="navbar-center"></div> */}
      <div className="navbar-end">
        <nav className="flex gap-3">
          {options.map((item, idx) => (
            <Link href={item?.href} className="btn" key={idx}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
