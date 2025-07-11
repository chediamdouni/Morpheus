"use client";

import Hero from "@/components/sections/hero";
import { ScrollBasedVelocity } from "@/components/sections/Velocity";
import ImageRevealSection from "@/components/sections/service-showcase";
import DesignerGrid from "@/components/sections/designers";
import ProgrammeSection from "@/components/sections/program";
import Exposition from "@/components/sections/exposition";
import { Footerdemo } from "@/components/sections/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { useRef, useEffect } from "react";
import { LenisRef } from "lenis/react";
import { cancelFrame, frame, motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { TextAnimate } from "@/components/magicui/text-animate";
import localFont from "next/font/local";
import {
  LetterSwapForward,
  LetterSwapPingPong,
} from "@/components/ui/letter-swap";
import { cn } from "@/lib/utils";
import ServicesShowcase from "@/components/sections/service-showcase";

const boska = localFont({
  src: "./Boska-Variable.ttf",
  variable: "--font-boska-variable",
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
          backgroundImageUrl="/images/homebanner.png"
          title="Transformez vos rêves en événements qui marquent les esprits et créent des souvenirs"
          description=""
          buttonLabel="Concevez un événement"
          buttonLink="#"
        />

        <SmoothScrollHero
          scrollHeight={1500}
          desktopImage="/images/homebanner.png"
          mobileImage="/images/homebanner.png"
          initialClipPercentage={0}
          finalClipPercentage={10}
        />
        <div className="relative h-screen w-full flex items-center justify-center">
          <h1
            className={`text-9xl font-medium text-[#05141D] mb-4 leading-[0.9] tracking-tighter text-center max-w-6xl mx-auto ${boska.className}`}
          >
            <TextAnimate
              animation="blurInDown"
              by="line"
              duration={1.5}
              delay={0.2}
            >
              {
                "Notre mission est de\ntransformer vos idées en\nréalisations d’exception"
              }
            </TextAnimate>
          </h1>
        </div>

        <div className="relative w-full flex flex-col items-center my-20">
          <p className="text-lg font-normal text-[#05141D] mb-8 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto">
            Evénements, expositions, et bien plus encore
          </p>
          <h1
            className={`scale-125 text-9xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto ${boska.className}`}
          >
            <TextAnimate
              animation="blurInDown"
              by="text"
              duration={1.5}
              delay={0.2}
            >
              Nos Projets
            </TextAnimate>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "flex flex-col h-screen w-full items-center justify-center mt-20 gap-10 relative",
              boska.className
            )}
          >
            <LetterSwapPingPong
              staggerFrom="center"
              label="MediTheria"
              className="peer/medi font-semibold text-9xl cursor-pointer tracking-[-0.06em] border-b-2 hover:border-b-transparent transition-all opacity-50 hover:opacity-100 border-neutral-900 text-neutral-900"
            />
            <LetterSwapPingPong
              staggerFrom="center"
              label="Hamasset"
              className="peer/hamasset font-semibold text-9xl cursor-pointer tracking-[-0.06em] border-b-2 hover:border-b-transparent transition-all opacity-50 hover:opacity-100 border-neutral-900 text-neutral-900"
            />
            <LetterSwapPingPong
              staggerFrom="center"
              label="Koufia"
              className="peer/koufia font-semibold text-9xl cursor-pointer tracking-[-0.06em] border-b-2 hover:border-b-transparent transition-all opacity-50 hover:opacity-100 border-neutral-900 text-neutral-900"
            />
            <Image
              src="/images/image1.png"
              alt="medi"
              width={400}
              height={400}
              className="absolute top-32 left-20 w-50 opacity-0 peer-hover/medi:opacity-100 transition-all duration-800 [clip-path:inset(50%_50%)] peer-hover/medi:[clip-path:inset(0%)]"
            />
            <Image
              src="/images/image1.png"
              alt="medi"
              width={400}
              height={400}
              className="absolute top-32 right-14 w-50 opacity-0 peer-hover/medi:opacity-100 transition-all duration-800 [clip-path:inset(50%_50%)] peer-hover/medi:[clip-path:inset(0%)]"
            />
            <Image
              src="/images/image1.png"
              alt="medi"
              width={400}
              height={400}
              className="absolute bottom-52 right-42 w-50 opacity-0 peer-hover/medi:opacity-100 transition-all duration-1000 [clip-path:inset(50%_50%)] peer-hover/medi:[clip-path:inset(0%)]"
            />
            
            <Image
              src="/images/Hamasset.png"
              alt="hamasset"
              width={400}
              height={400}
              className="absolute top-32 left-20 w-64 opacity-0 peer-hover/hamasset:opacity-100 transition-all duration-600 [clip-path:inset(50%_50%)] peer-hover/hamasset:[clip-path:inset(0%)]"
            />
            <Image
              src="/images/Hamasset.png"
              alt="hamasset"
              width={400}
              height={400}
              className="absolute bottom-52 right-42 w-50 opacity-0 peer-hover/hamasset:opacity-100 transition-all duration-1000 [clip-path:inset(50%_50%)] peer-hover/hamasset:[clip-path:inset(0%)]"
            />
            <Image
              src="/images/koufia.png"
              alt="koufia"
              width={400}
              height={400}
              className="absolute top-32 left-20 w-64 opacity-0 peer-hover/koufia:opacity-100 transition-all duration-600 [clip-path:inset(50%_50%)] peer-hover/koufia:[clip-path:inset(0%)]"
            />
            <Image
              src="/images/emplacement.jpg"
              alt="koufia"
              width={400}
              height={400}
              className="absolute bottom-52 right-42 w-50 opacity-0 peer-hover/koufia:opacity-100 transition-all duration-1000 [clip-path:inset(50%_50%)] peer-hover/koufia:[clip-path:inset(0%)]"
            />
          </motion.div>
        </div>

        {/* <ServicesShowcase />
        <ScrollBasedVelocity />
        <DesignerGrid />
        <ProgrammeSection />
        <Exposition />
        <Footerdemo /> */}
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
