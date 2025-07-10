import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "../magicui/text-animate";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cabinetGrotesk = localFont({
  src: "../../app/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export type HeroProps = {
  backgroundType: string;
  backgroundImageUrl?: string;
  title: string;
  description?: string;
  buttonLabel: string;
  buttonLink?: string;
};
export default function Hero({
  backgroundType,
  backgroundImageUrl,
  title,
  description,
  buttonLabel,
  buttonLink,
}: HeroProps) {
  const sectionRef = useRef(null);

  // Get scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // 0 when top of section at top, 1 when bottom at top
  });

  const minSize = 64; // px, minimum size after scroll
  const maxSize = 128; // px, initial size

  const size = useTransform(scrollYProgress, [0, 0.5], [maxSize, minSize]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: opacity }}
      className={`relative flex flex-col items-center gap-6  h-screen w-full pt-8 bg-[#FAF8F1] z-100 ${cabinetGrotesk.className}`}
    >
      <div className="sticky top-0 z-20 flex justify-center w-full bg-[#FAF8F1] py-4">
        <motion.div style={{ width: size, height: size }}>
          <Image
            src="/images/logo-morpheus.png"
            alt="logo"
            width={maxSize}
            height={maxSize}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </div>
      {backgroundType === "gradient" && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAF8F1]/70 via-[#FAF8F1]/40 to-[#FAF8F1]/80" />
      )}
      {backgroundType === "image" && backgroundImageUrl && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImageUrl}
            alt="Background"
            fill
            className="object-cover object-center absolute inset-0 -z-10 opacity-80"
          />
        </div>
      )}
      <h1 className="text-8xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto">
        <TextAnimate
          animation="blurInDown"
          by="word"
          duration={1.5}
          delay={0.2}
        >
          {title}
        </TextAnimate>
      </h1>
      {description && (
        <p className="text-lg md:text-2xl font-light text-black/90 mb-8 max-w-xl drop-shadow-md">
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-4">
        {buttonLink ? (
          <Link href={buttonLink}>
            <Button className="px-4 py-2 h-sm text-base tracking-wide rounded-lg border border-black shadow-none bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
              {buttonLabel}
            </Button>
          </Link>
        ) : (
          <Button className="px-4 py-2 h-fit text-lg tracking-wide rounded-lg border border-[#05141D] shadow-none bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
            {buttonLabel}
          </Button>
        )}
        <Button
          variant="outline"
          className="px-4 py-2 h-fit text-sm bg-transparent tracking-wide rounded-lg shadow-none hover:bg-[#05141D]/90 hover:text-white border-[#05141D]"
        >
          Savoir plus
        </Button>
      </div>
    </motion.section>
  );
}
