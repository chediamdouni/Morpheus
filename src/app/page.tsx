"use client";

import Hero from "@/components/sections/hero";
import { ScrollBasedVelocity } from "@/components/sections/Velocity";
import ImageRevealSection from "@/components/sections/ImageRevealSection";
import DesignerGrid from "@/components/sections/designers";
import ProgrammeSection from "@/components/sections/program";
import Exposition from "@/components/sections/exposition";
import { Footerdemo } from "@/components/sections/footer";

export default function Home() {

  // bg-[#E8D07A]
  return <div className="bg-[#FAF8F1]">
    <Hero
      backgroundType="gradient"
      backgroundImageUrl="/images/hero.jpeg"
      title="MediTheria le récit d&apos;un monde où la mer inspire la main façonne et la mode fait mémoire"
      description=""
      buttonLabel="Explorer les Designers"
      buttonLink="#"
    />

    <ImageRevealSection />
    <ScrollBasedVelocity />
    <DesignerGrid />
    <ProgrammeSection />
    <Exposition />
    <Footerdemo />
  </div>;
}
