import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ArrowRight } from "lucide-react";

export default function ProgrammeSection() {
    const lines = [
        "Un voyage sensoriel et poétique autour de la Méditerranée",
        "Apparition d’une égérie surprise ou guest",
        "Annonce officielle de MANOS ",
    ];

    return (
        <div className="py-20 px-4 max-w-4xl mx-auto ">
            {/* Titre principal */}
            <div className="font-bold text-center mb-12 uppercase">
                <TypingAnimation startOnView={true} className="text-5xl md:text-6xl tracking-wide">
                    Découvrir Programme
                </TypingAnimation>
            </div>

            {/* Texte avec flèches */}
            <div className="space-y-6">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 text-lg md:text-2xl font-medium text-[#05141D]"
                    >
                        <ArrowRight className="w-6 h-6 mt-1 text-[#2179B9]" />
                        <TextAnimate animation="fadeIn" by="line" as="p" className="text-4xl text-[#05141D] " delay={index * 0.3} startOnView={true}>
                            {line}
                        </TextAnimate>
                    </div>
                ))}
            </div>
        </div>
    );
}
