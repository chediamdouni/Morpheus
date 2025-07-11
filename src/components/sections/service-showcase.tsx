"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
import { TextAnimate } from "../magicui/text-animate";

const cabinetGrotesk = localFont({
    src: "../../app/CabinetGrotesk-Variable.ttf",
    variable: "--font-cabinet-grotesk",
    display: "swap",
});

const services = [
    {
        name: "Conception de Projets Innovants et Distinctifs",
        image: "/images/service-1.jpeg",
    },
    {
        name: "Création et Organisation d’Événements Haut de Gamme",
        image: "/images/gallerie2.jpeg",
    },
    {
        name: "Conseil en Marketing et Développement d’Entreprises de Luxe",
        image: "/images/gallerie3.jpeg",
    },
    {
        name: "Stratégie de Communication et Branding de Luxe",
        image: "/images/gallerie4.jpeg",
    },
];

export default function ServicesShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 60 });

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="w-full max-w-5xl mx-auto py-20 px-4" ref={containerRef}>
            <h1
                className={`text-7xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto ${cabinetGrotesk.className}`}
            >
                <TextAnimate
                    animation="blurInDown"
                    by="word"
                    duration={1.5}
                    delay={0.2}
                >
                    Services Que Nous Offrons
                </TextAnimate>
            </h1>

            <div className="space-y-4 relative mt-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative flex justify-between items-center px-6 py-5 border-b border-gray-200 group transition-all duration-300 cursor-pointer"
                    >
                        <span
                            className={`text-xl font-medium transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-40"
                                }`}
                        >
                            {service.name}
                        </span>

                        <ArrowRight
                            className={`w-6 h-6 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-1 text-[#E8D07A]" : "text-black"
                                }`}
                        />
                    </div>
                ))}

                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            key={services[hoveredIndex].image}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                x: mousePosition.x + 300,
                                y: mousePosition.y - 500,
                                rotate: 25
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: mousePosition.x + 300,
                                y: mousePosition.y - 600,
                                rotate: 25
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                x: mousePosition.x + 300,
                                y: mousePosition.y - 500,
                                rotate: 25
                            }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="absolute pointer-events-none z-50 w-50 h-50 overflow-hidden rounded-xl shadow-xl relative"
                        >
                            <Image
                                src={services[hoveredIndex].image}
                                alt={services[hoveredIndex].name}
                                fill
                                className="object-cover "
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
