import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "../magicui/text-animate";


export type HeroProps = {
    backgroundType: string;
    backgroundImageUrl?: string;
    title: string;
    description?: string;
    buttonLabel: string;
    buttonLink?: string;
}
export default function Hero({ backgroundType, backgroundImageUrl, title, description, buttonLabel, buttonLink }: HeroProps) {
    return (
        <section className="relative flex items-center justify-center min-h-screen w-full ">

            {backgroundType === "gradient" && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAF8F1]/70 via-[#FAF8F1]/40 to-[#FAF8F1]/80" />
            )}
            {backgroundType === "image" && backgroundImageUrl && (
                <div className="absolute inset-0 -z-10">
                    <Image src={backgroundImageUrl} alt="Background" fill className="object-cover object-center absolute inset-0 -z-10 opacity-80" />
                </div>
            )}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-5/6">
                <h1 className="text-[6rem] font-extrabold text-black mb-4 leading-[1.1] ">
                    <TextAnimate animation="blurInDown" by="word" duration={1.5} delay={0.2} >
                        {title}
                    </TextAnimate>
                </h1>
                <p className="text-lg md:text-2xl font-light text-black/90 mb-8 max-w-xl drop-shadow-md ">
                    {description}
                </p>
                {buttonLink ? (
                    <Link href={buttonLink}>
                        <Button className="px-8 py-4 text-xl tracking-wide rounded-lg border border-black shadow-lg uppercase bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
                            {buttonLabel}
                        </Button>
                    </Link>
                ) : (
                    <Button className="px-8 py-4 text-xl tracking-wide rounded-lg border border-black shadow-lg bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
                        {buttonLabel}
                    </Button>
                )}
            </div>
        </section>
    );
}
