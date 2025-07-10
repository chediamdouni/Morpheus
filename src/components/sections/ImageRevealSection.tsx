"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/magicui/text-reveal";
import Image from "next/image";

export default function ImageRevealSection() {
    const textRef = useRef(null);
    const textInView = useInView(textRef, { once: true, amount: 0.5 });

    return (
        <section className=" flex flex-row items-center justify-center px-6 mb-20">
            <div className="w-full max-w-xl">
                <Image
                    src="/images/MariemKoubaa.png"
                    alt="Créateur"
                    width={500}
                    height={500}
                    className="w-full h-[40rem] object-cover rounded-xl shadow-xl"
                />
            </div>

            {/* <div
                ref={textRef}
                className="w-full max-w-2xl pl-12 flex items-center justify-center h-[80%]"
                style={{ height: "100%" }}
            >
                {textInView && (
                    <TextReveal>
                        Myriam Koubaa est une directrice artistique engagée, passionnée par la valorisation du fait main.
                        À travers Morpheus, elle crée des expériences immersives mêlant artisanat et modernité.
                        Avec MediTheria, elle célèbre la Méditerranée dans une vision éthique, poétique et contemporaine.
                    </TextReveal>
                )}
            </div> */}
            <div className="w-full text-[2.7rem] max-w-xl pl-12 flex items-center justify-center text-[#05141D]">
                Myriam Koubaa est une directrice artistique engagée, passionnée par la valorisation du fait main.
                À travers Morpheus, elle crée des expériences immersives mêlant artisanat et modernité.
                Avec MediTheria, elle célèbre la Méditerranée dans une vision éthique, poétique et contemporaine.
            </div>
        </section>
    );
}
