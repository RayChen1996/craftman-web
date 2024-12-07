import React from "react";
import indexJpg from "@/../public/images/index-2.jpg";
import index3Jpg from "@/../public/images/index-3.jpg";
import index4Jpg from "@/../public/images/index-4.jpg";
import Image from "next/image";
import clsx from "clsx";
export default function LearnMore() {
  const pics: InfoCard[] = [
    {
      index: 0,
      title: "Special Clays",
      description:
        "A general body formulation for contemporary earthenware is 25% kaolin, 25% ball clay, 35% quartz and 15% feldspar.",
      imgSrc: index3Jpg,
    },
    {
      index: 1,
      title: "Less is more",
      description:
        "Trimming pottery can transform a weighty Earth-bound pot into one that is a pleasure to hold, look at, and use.",
      imgSrc: indexJpg,
    },
    {
      index: 2,
      title: "Marvelous Detail",
      description:
        "In Craftsman, the art director, working with marketers, develops or creates an idea of a new creation.",
      imgSrc: index4Jpg,
    },
  ];
  return (
    <section className="container">
      {pics.map((item, idx) => (
        <>
          <InfoCard {...item} key={idx} />
        </>
      ))}
    </section>
  );
}
type InfoCard = {
  index: number;
  title: string;
  description: string;
  btnFn?: () => void;
  imgSrc: any;
};
function InfoCard({ description, ...param }: InfoCard) {
  return (
    <div
      className={clsx("my-4 flex flex-wrap items-center gap-3 lg:flex-nowrap")}
    >
      <figure className={clsx("relative min-h-[550px] w-[540px]", "order-1")}>
        <Image
          alt=""
          src={param.imgSrc}
          sizes="100vw"
          fill
          className="aspect-[1/1] object-cover"
        />
      </figure>
      <div className={clsx(param.index % 2 === 0 && "order-1")}>
        <div className="text-2xl text-black">{param.title}</div>
        <p className="my-4">{description}</p>
        <button className="label-text text-[#0E8A00]">Learn More</button>
      </div>
    </div>
  );
}
