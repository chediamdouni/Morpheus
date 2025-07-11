"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CalendarInput } from "../../components/ui/calendar-input";
import { Separator } from "@/components/ui/separator";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

const cabinetGrotesk = localFont({
    src: "../../app/CabinetGrotesk-Variable.ttf",
    variable: "--font-cabinet-grotesk",
    display: "swap",
});

export default function Contact() {
    return (
        <div className="relative bg-[#FAF8F1] min-h-screen">
            <Navbar />
            <div className="relative w-full flex items-start justify-center pt-[10vw] pb-[2vw] max-w-6xl mx-auto" style={{ fontFamily: cabinetGrotesk.style.fontFamily }}>
                <h1 className="text-center text-[16vw] font-bold tracking-[-.03em] uppercase mx-auto">
                    <TextAnimate animation="blurInUp" by="character" once>
                        Contact
                    </TextAnimate>
                </h1>
            </div>
            <div className="w-full flex justify-center items-center relative py-20 px-6 bg-[#FAF8F1]">
                <div className="absolute inset-0 flex justify-center items-center z-0">
                    <div className="absolute w-[55%] bottom-15 h-[70%] bg-[#EFE9DD] rounded-xs " />
                </div>

                <div className="relative w-[50%] max-w-3xl bg-white p-[50px] rounded-xs z-10 ">
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-lg ml-1">Nom et Prénom</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="py-3 px-2 border w-full bg-white rounded-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-lg ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="JohnDoe@Morpheus.com"
                                className="py-3 px-2 border w-full bg-white rounded-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="profession" className="text-lg ml-1">Profession</label>
                            <input
                                type="text"
                                placeholder="Dans quel secteur travaillez-vous ?"
                                className="py-3 px-2 border w-full bg-white rounded-xs"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="profession" className="text-lg ml-1">Service pour lequel vous nous contactez</label>
                            <Select >
                                <SelectTrigger className="py-3 px-2 border w-full bg-white rounded-xs ">
                                    <SelectValue placeholder="Service pour lequel vous nous contactez" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="concept">Conceptions de concepts exclusives et innovants</SelectItem>
                                    <SelectItem value="branding">Stratégie decommunication et Branding de luxe</SelectItem>
                                    <SelectItem value="marketing">Conseils en marketing et Développement d'entreprise</SelectItem>
                                    <SelectItem value="immersive">Création et organisation d'évenements haut de gamme</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="type" className="text-lg ml-1">Le type d’événement souhaité</label>
                            <Select >
                                <SelectTrigger className="py-3 px-2 border w-full bg-white rounded-xs ">
                                    <SelectValue placeholder="Le type d’événement souhaité" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="lancement">Lancement produit</SelectItem>
                                    <SelectItem value="exposition">Exposition</SelectItem>
                                    <SelectItem value="conférence">Conférence</SelectItem>
                                    <SelectItem value="immersive">Experience immersive</SelectItem>
                                    <SelectItem value="autre">Autre</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="type" className="text-lg ml-1">Les prestations recherchées</label>
                            <Select >
                                <SelectTrigger className="py-3 px-2 border w-full bg-white rounded-xs ">
                                    <SelectValue placeholder="Les prestations recherchées" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="organisation">Organisation complete</SelectItem>
                                    <SelectItem value="communication">Strategir de communication</SelectItem>
                                    <SelectItem value="scene">Mise en scene </SelectItem>
                                    <SelectItem value="vip">Gestion VIP</SelectItem>
                                    <SelectItem value="autre">Autre</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="date" className="text-lg ml-1">Rendez-Vous souhaitée</label>
                            <CalendarInput />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="text-lg ml-1">Message</label>
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="py-3 px-2 border w-full bg-white rounded-xs"
                            ></textarea>
                        </div>
                        <Separator />
                        <div className="flex justify-center ">
                            <Button type="submit" className="w-full px-4 py-6 text-lg font-semibold rounded-xs">
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="relative h-screen w-full flex flex-col items-center justify-center">
                <h1
                    className={`text-7xl font-extrabold text-[#05141D] mb-4 leading-[0.9] tracking-tight text-center max-w-6xl mx-auto ${cabinetGrotesk.className}`}
                >
                    <TextAnimate
                        animation="blurInDown"
                        by="word"
                        duration={1.5}
                        delay={0.2}
                    >
                        Besoin de quelque chose en urgence ?
                        Appelez-nous au +33 6 99 58 51 87
                        ou écrivez-nous directement à contact@morpheus-sa.com
                    </TextAnimate>
                </h1>
                <div className="flex items-center justify-center gap-4 mt-10">
                    <Button className="px-4 py-2 h-sm text-base tracking-wide rounded-lg border border-black shadow-none bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
                        Appeler
                    </Button>
                    <Button
                        variant="outline"
                        className="px-4 py-2 h-fit text-sm bg-transparent tracking-wide rounded-lg shadow-none hover:bg-[#05141D]/90 hover:text-white border-[#05141D]"
                    >
                        Envoyer email
                    </Button>
                </div>
            </div>

        </div>
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
            <Link href={"/contact"}>
                <div className="flex justify-end w-40">
                    <Button className="px-4 py-2 h-sm text-base tracking-wide rounded-lg border border-black shadow-none bg-[#05141D]/90 text-white hover:bg-[#05141D]/80 ">
                        Concevez un événement
                    </Button>
                </div>
            </Link>
        </header>
    );
}