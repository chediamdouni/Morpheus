"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function ExpositionPlace() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="font-bold text-center mb-12 uppercase">
                <TypingAnimation startOnView={true} className="text-5xl md:text-6xl tracking-wide text-black">
                    Lieu d’exposition
                </TypingAnimation>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">

                {/* Texte animé à gauche */}
                <motion.div
                    className="flex-1 text-center md:text-left "
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl font-light text-[#05141D] leading-relaxed w-4/5">
                        Niché entre mer et montagne, Nice rayonne comme un joyau posé sur le rivage méditerranéen.
                        Ses ruelles aux couleurs ocres murmurent des histoires anciennes, tandis que la lumière — douce et dorée — caresse les façades et les palmiers.
                        Dans l’air flotte un parfum de sel, de lavande et de liberté, une invitation à ralentir, à contempler, à créer.
                        Ville d’artistes et d’âmes sensibles, Nice mêle avec grâce le raffinement français à la chaleur du Sud.
                        C’est ici, entre ciel azur et mer d’émeraude, que le patrimoine embrasse la modernité, et que chaque création devient une ode à la Méditerranée.
                    </p>
                </motion.div>

                {/* Image animée à droite */}
                <motion.div
                    className="relative w-full md:w-[500px] h-[350px]  overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/images/emplacement.jpg"
                        alt="Lieu d’exposition"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
