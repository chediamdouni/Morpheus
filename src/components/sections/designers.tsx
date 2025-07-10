"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { EyeIcon } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const designers = [
    {
        name: "Ahmed Talfit",
        image: "/images/Designers/ahmedtalfit.jpg",
        slug: "ahmed-talfit"
    },
    {
        name: "Anissa",
        image: "/images/Designers/anisa.png",
        slug: "anissa"
    },
    {
        name: "Asma Haj Romdhane",
        image: "/images/Designers/asmahajromdhane.png",
        slug: "asma-haj-romdhane"
    },
    {
        name: "Baraa Gouillou",
        image: "/images/Designers/baraa.jpg",
        slug: "baraa-gouillou"
    },
    {
        name: "Fatma Ben Abdallah",
        image: "/images/Designers/fatmabenabdalah.jpg",
        slug: "fatma-ben-abdallah"
    },
    {
        name: "Hamaset",
        image: "/images/Designers/hamset.png",
        slug: "hamaset"
    },
    {
        name: "Koufia",
        image: "/images/Designers/koufia.png",
        slug: "koufia"
    },
    {
        name: "Latifa Hizem",
        image: "/images/Designers/latifahizem-nakcha.jpeg",
        slug: "latifa-hizem"
    },
    {
        name: "NEE",
        image: "/images/Designers/nee.jpeg",
        slug: "nee"
    },
    {
        name: "Sarra Jomaa",
        image: "/images/Designers/sarrajomaa.png",
        slug: "sarra-jomaa"
    },
];
export default function DesignerGrid() {
    return (
        <section className="px-4 py-16 max-w-6xl mx-auto">
            <div className=" font-bold text-center mb-10 uppercase">
                <TypingAnimation startOnView={true} className="text-6xl tracking-wide text-black" >
                    Designers
                </TypingAnimation>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {designers.map((designer, index) => (
                    <Card
                        key={index}
                        className={`flex flex-col w-[300px] h-[420px] gap-0 border border-black rounded-none overflow-hidden p-0 ${index % 3 === 1 ? "mt-10" : ""
                            }`}
                    >
                        <Link
                            href={`/designer/${designer.slug}`}
                            className="relative flex-1 w-full block group"
                            aria-label={`Voir le profil de ${designer.name}`}
                            title={`Voir le profil de ${designer.name}`}
                        >
                            <Image
                                src={designer.image}
                                alt={designer.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-101"
                                sizes="(max-width: 768px) 100vw, 300px"
                                priority={index < 3} // prioritise les premières
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                                <EyeIcon className="w-10 h-10 text-white mb-2" />
                                <span className="text-white text-sm font-semibold">
                                    Voir le profil
                                </span>
                            </div>
                        </Link>

                        <CardContent className="bg-[#05141D] text-white text-md uppercase text-center py-2 tracking-wide">
                            {designer.name}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}