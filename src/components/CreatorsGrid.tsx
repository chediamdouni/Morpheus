"use client";


import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef } from "react";

const bgImages = [
    "/images/sarrajomaa.png",
    "/images/Hamasset.png",
    "/images/AnissaAida.png",
    "/images/Koufia.png",
    "/images/NEE1.png",
    "/images/Nakcha.png",
    "/images/FatmaBenAbdalah.png",
    "/images/Baraa.png",
    "/images/Ahmed2.png",
    "/images/Tourath.png",
];


const creators = [
    "Sara Jomaa",
    "Hamasset Fannya",
    "Anissa Aida",
    "KOUFIA",
    "NEE",
    "NAKSHA",
    "Fatma Ben Abdallah",
    "Baraa",
    "Ahmed Talfite",
    "Tourath",
];
const descriptions = [
    "Originaire de Ksour Essaf, Sara Jomaa maîtrise l&apos;art du filigrane, un savoir-faire ancestral qui consiste à travailler l&apos;argent et l&apos;or sous forme de fils extrêmement fins. Ses bijoux, véritables broderies en métal, mettent en valeur des motifs traditionnels comme le zigzag et l&apos;infini, symboles de continuité et d&apos;héritage, les fleurs de jasmin et motifs floraux inspirés de la nature, ainsi que les maillages et structures ajourées évoquant le tissage traditionnel. Elle intègre également des matériaux nobles comme la nacre, l&apos;ambre naturel et le bois d&apos;ébène, alliant raffinement et originalité.",
    "Hamasset Fannya crée des bijoux d&apos;exception fabriqués entièrement à la main avec une précision et une attention minutieuse aux détails. Chaque pièce est réalisée en métaux précieux et ornée de pierres naturelles sélectionnées avec soin. L&apos;objectif est d&apos;offrir des créations intemporelles, alliant poésie et excellence artisanale, tout en valorisant des techniques de joaillerie transmises à travers les générations.",
    "ANISSA AIDA valorise un savoir-faire inspiré des traditions méditerranéennes et japonaises, revisité avec une touche contemporaine. La marque privilégie le tissage manuel, la broderie et le cuir travaillés à la main, en mettant l&apos;accent sur des matières nobles comme la soie, le lin et le coton. Ancrée dans une démarche slow fashion, elle propose des pièces en éditions limitées, durables et minimalistes, optimisant chaque chute de tissu dans une logique zéro déchet. Ses créations reflètent un équilibre entre héritage artisanal, modernité et respect des ressources",
    "KOUFIA marie techniques ancestrales et modernité, créant des vêtements uniques à partir de fibres naturelles telles que le lin, la laine, la soie et le coton, tissées à la main par des artisans. Chaque pièce privilégie la durabilité à travers une production artisanale et l&apos;upcycling de textiles patrimoniaux, assurant ainsi une transmission culturelle respectueuse et innovante.",
    "NEE réinvente la couture en insufflant une seconde vie à des tissus vintage et broderies anciennes, transformés avec une esthétique moderne. Chaque pièce est minutieusement confectionnée à la main par des artisans locaux, perpétuant les techniques traditionnelles comme la broderie. La marque s&apos;inscrit dans une démarche durable et éthique, utilisant exclusivement des matériaux recyclés ou upcyclés, avec un fort engagement social en faveur de l&apos;autonomisation des femmes artisanes. NEE associe ainsi savoir-faire ancestral, design contemporain et responsabilité environnementale.",
    "NAKSHA privilégie le fait main, en intégrant des techniques artisanales comme la couture manuelle, ainsi que la sculpture ornementale sur bois, marbre ou métal. Chaque pièce est pensée avec minutie et raffinement, mettant en lumière des matières nobles et durables. La marque valorise des savoir-faire ancestraux tout en y insufflant une touche moderne, fidèle à son credo : subtilité, perfection et authenticité.",
    "FATMA BEN ABDALALLAH Son dernier défilé - un moment historique  - a été organisé pour la toute premiére fois au Musée du Bardo, joyau du patrimoine tunisien et gardien de la plus grande collection d&apos;art antique du pays.Dans ce lieu chargé d&apos;histoire, ses piéces ont dialogué avec les mosaiques millénaires et les trésors du passé, créant une fusion magique entre tradition et modernité, entre culture et haute couture.Aujourdh&apos;ui, la marque est portée avec la même passion et une visison renouvelée par Fatma Ben Aabdallah et sa fille Nour Ben Abdallah, unies pour faire perdurer cet héritage d&apos;exception tout en le réinventant pour les générations futures.",
    "Chez Baraa, le savoir-faire s&apos;inscrit dans une démarche artisanale, responsable et profondément humaine. Chaque pièce est pensée comme un dialogue entre matière et mouvement, avec une attention particulière portée à la coupe, aux finitions et au confort. La créatrice privilégie des fibres naturelles — lin lavé, chanvre, laine flamande — qu&apos;elle sélectionne pour leur noblesse, leur durabilité et leur douceur au toucher. Inspirée par l&apos;héritage textile méditerranéen et les techniques traditionnelles de couture, Baraa revisite les gestes anciens avec une sensibilité contemporaine, créant ainsi des vêtements qui respirent l&apos;authenticité, la sobriété et l&apos;élégance naturelle.",
    "Les créations d&apos;Ahmed Talfit sont de véritables sculptures de tissu, façonnées avec rigueur et délicatesse. Chaque pièce est pensée pour sublimer la silhouette, là où la structure rencontre la fluidité. Il travaille des matières précieuses avec une précision millimétrée, mariant lignes architecturales et élégance intemporelle. Son savoir-faire s&apos;exprime dans le silence des détails — un pli, une coupe, une couture invisible — qui laissent une empreinte forte, sans jamais en dire trop. Portées sur les tapis rouges les plus prestigieux, ses créations célèbrent une féminité à la fois puissante et subtile",
    "Asma Haj Romdhane Nourrie dès l&apos;enfance par l&apos;héritage familial — sa mère étant brodeuse — et par les traditions artisanales de ses ancêtres, la fondatrice de Tourath a développé un savoir-faire unique qu&apos;elle a perfectionné lors de ses études à l&apos;Institut de Technologie, d&apos;Art, d&apos;Architecture et d&apos;Urbanisme. Forte de cette expertise, elle a à son tour transmis ses connaissances en encadrant pendant deux ans des étudiants en création artisanale à l&apos;École Supérieure des Sciences et Technologies du Design.À travers Tourath, elle s&apos;attache à préserver et à faire évoluer un artisanat en voie de disparition : la broderie traditionnelle tunisienne. Sa démarche dépasse la simple création esthétique : il s&apos;agit de réinterpréter les motifs patrimoniaux à travers des vêtements modernes, durables et intemporels, alliant raffinement et confort.Chaque création rend hommage à la richesse du patrimoine tunisien, où broderies fines et calligraphies poétiques réinventent les traditions dans des pièces uniques.",
];

export default function CreatorsGrid() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-20 text-center w-full">
                L&apos;excellence artisanale au cœur du projet
            </h2>
            {creators.map((name, i) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true, amount: 0.6 });
                return (
                    <section
                        key={i}
                        ref={ref}
                        className="relative w-full h-screen flex items-end justify-end overflow-hidden"
                        style={{
                            backgroundImage: `url(${bgImages[i]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                        }}
                    >

                        <motion.div
                            className="absolute inset-0 z-0"
                            style={{
                                background: "rgba(0,0,0,0.22)",
                                pointerEvents: "none",
                            }}
                            initial={{ scale: 1.07 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        />


                        <motion.div
                            className="relative z-10 text-right"
                            style={{
                                position: "absolute",
                                bottom: "6%",
                                right: "6%",
                                willChange: "transform, opacity",
                                maxWidth: '80vw',
                            }}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={{}}
                        >
                            <motion.h3
                                className="text-2xl md:text-3xl font-semibold mb-4 text-white tracking-tight"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.07 } },
                                }}
                            >
                                {name.split(" ").map((word, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="inline-block"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.h3>
                            <motion.p
                                className="text-base md:text-lg text-white text-right w-[60vw]"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
                                }}
                            >
                                {(descriptions[i] || "").split(" ").map((word, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="inline-block"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>
                    </section>
                );
            })}
        </>
    );
}
