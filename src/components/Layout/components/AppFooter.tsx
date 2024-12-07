import React from "react";
import { italianno } from "@/fonts";
import clsx from "clsx";
import { footerOptions } from "@/option";
import Link from "next/link";
export default function AppFooter() {
  return (
    <footer className="footer container h-14 items-center">
      <div
        className={clsx(
          italianno.variable,
          "items-center font-black italic lg:text-3xl",
        )}
      >
        Craftsman
      </div>
      <div className="">© 2020. All Rights Reserved.</div>
      <div className="footer-center">
        <nav className="flex gap-3">
          {footerOptions.map((item, idx) => (
            <Link href={item?.href} className="btn" key={idx}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
