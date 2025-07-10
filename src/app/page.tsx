"use client";

import Hero from "@/components/sections/hero";
import { ScrollBasedVelocity } from "@/components/sections/Velocity";
import ImageRevealSection from "@/components/sections/ImageRevealSection";
import DesignerGrid from "@/components/sections/designers";
import ProgrammeSection from "@/components/sections/program";
import Exposition from "@/components/sections/exposition";
import { Footerdemo } from "@/components/sections/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { useRef, useEffect } from "react";
import { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { TextAnimate } from "@/components/magicui/text-animate";
import localFont from "next/font/local";
import { LetterSwapForward, LetterSwapPingPong } from "@/components/ui/letter-swap";
import { cn } from "@/lib/utils";
const cabinetGrotesk = localFont({
  src: "./CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  // bg-[#E8D07A]
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="bg-[#FAF8F1] relative">
        <Navbar />
        <Hero
          backgroundType="gradient"
          backgroundImageUrl="/images/hero.jpeg"
          title="Transformez vos rêves en événements qui marquent les esprits et créent des souvenirs inoubliables"
          description=""
          buttonLabel="Concevez un événement"
          buttonLink="#"
        />

        <SmoothScrollHero
          scrollHeight={1500}
          desktopImage="/images/Hamasset.png"
          mobileImage="/images/Hamasset.png"
          initialClipPercentage={0}
          finalClipPercentage={10}
        />
        <div className="relative h-screen w-full flex items-center justify-center">
          <h1
            className={`text-8xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto ${cabinetGrotesk.className}`}
          >
            <TextAnimate
              animation="blurInDown"
              by="word"
              duration={1.5}
              delay={0.2}
            >
              Notre mission est de transformer vos idées en réalisations
              d’exception
            </TextAnimate>
          </h1>
        </div>

        <div className="relative w-full flex flex-col items-center my-20">
          <p className="text-2xl font-normal text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto">
            Evénements, expositions, et bien plus encore
          </p>
          <h1
            className={`text-9xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto ${cabinetGrotesk.className}`}
          >
            <TextAnimate
              animation="blurInDown"
              by="word"
              duration={1.5}
              delay={0.2}
            >
              Nos Projets
            </TextAnimate>
          </h1>
          <div className={cn("flex flex-col items-center justify-center mt-20 gap-10", cabinetGrotesk.className)}>
              <LetterSwapPingPong staggerFrom="center" label="MediTheria" className="font-semibold text-8xl tracking-tighter underline text-neutral-500 hover:text-neutral-900" />
              <LetterSwapPingPong staggerFrom="center" label="Hamasset" className="font-semibold text-8xl tracking-tighter underline text-neutral-500 hover:text-neutral-900" />
              <LetterSwapPingPong staggerFrom="center" label="Koufia" className="font-semibold text-8xl tracking-tighter underline text-neutral-500 hover:text-neutral-900" />

          </div>
        </div>
        
        <ImageRevealSection />
        <ScrollBasedVelocity />
        <DesignerGrid />
        <ProgrammeSection />
        <Exposition />
        <Footerdemo />
      </div>
    </ReactLenis>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 z-20 flex justify-between items-center w-full bg-[#FAF8F1] py-4 px-8">
      <div className="flex w-40">
        <span>Menu</span>
      </div>
      <div className="size-16">
        <Image
          src="/images/logo-morpheus.png"
          alt="logo"
          width={64}
          height={64}
          className="size-full"
        />
      </div>
      <div className="flex justify-end w-40">
        <Button className="px-4 py-2 h-sm text-base tracking-wide rounded-lg border border-black shadow-none bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
          Concevez un événement
        </Button>
      </div>
    </header>
  );
}
