"use client";
import Image from "next/image";
import ItemContainer from "@/components/lp-practice/itemContainer";
import Intro from "@/components/lp-practice/intro";

export default function Page() {
  return (
    <main className="w-screen h-screen">
      <figure className="w-screen h-screen fixed -z-10">
        <Image
          src="/resource/background/bg-img.JPEG"
          className="relative object-cover"
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          alt="background image"
        />
      </figure>
      <Intro />
      <ItemContainer />
    </main>
  );
}
