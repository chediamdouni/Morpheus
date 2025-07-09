"use client";
import React from "react";
import Image from "next/image";
import CarouselImages from "./CarouselImages";
import CreatorsGrid from "./CreatorsGrid";
import { motion } from "framer-motion";

export default function MediTheriaShowcase() {
  return (
    <main className="flex flex-col items-center w-full text-gray-900 bg-white">

      {/* Hero Section */}
      <motion.section
        className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
        style={{
          minHeight: '100vh',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/banner.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.4, zIndex: 1 }} />

        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-32">
          <h1 className="text-5xl md:text-6xl font-HillsideCalligraphy mb-6 max-w-3xl text-white">
            A Mediterranean Ode to Timeless Luxury
          </h1>
          <p className="text-xl max-w-2xl text-white">
            Luxury meets heritage — A défilé like no other in Monaco
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
            Scroll to Explore
          </button>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="w-full py-24 px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/MariemKoubaa.png"
            alt="Défilé MediTheria"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
            style={{ aspectRatio: "4/5" }}
            width={384}
            height={480}
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center md:text-left text-center px-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un événement signé Morpheus</h2>
          <p className="text-lg max-w-2xl md:max-w-full mx-auto md:mx-0 leading-relaxed">
            Fondée par Myriam Koubaa, Morpheus est une structure spécialisée dans l&apos;événementiel et la communication de luxe. À travers MediTheria, elle orchestre un défilé inédit à Monaco, mettant en lumière les traditions artisanales revisitées par la mode contemporaine.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Galerie d&apos;art </h2>
        <CarouselImages />
      </section>

      {/* Vision Section */}
      <section className="w-full py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">
          L&apos;âme de la Méditerranée sublimée par la mode
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Chaque pièce du défilé incarne les textures, la lumière et les symboles de la Méditerranée. De la mer à la terre, de la tradition au design, MediTheria rend hommage à un patrimoine vivant et vibrant.
        </p>
      </section>

      {/* Creators Section */}
      <CreatorsGrid />

      {/* Show Experience */}
      <section className="w-full py-24 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Une immersion sensorielle au bord de la mer
        </h2>
        <ul className="list-disc max-w-4xl mx-auto text-left text-lg pl-6 space-y-3">
          <li>Scénographie ouverte, inspirée des voiles et matières naturelles</li>
          <li>Lumière dorée de fin de journée</li>
          <li>Musique, projections visuelles, et performance d&apos;ouverture</li>
          <li>Podium fluide comme une vague, entre oliviers et mosaïques</li>
          <li>Moments forts : apparition surprise, égérie, guest, révélation de MANOS</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 px-6 max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-8">Luxe responsable, engagement durable</h2>
        <ul className="list-disc text-lg pl-6 text-left max-w-3xl mx-auto space-y-3">
          <li>La mode éthique (fibres naturelles, upcycling, production raisonnée)</li>
          <li>Inclusion féminine (80 % de créatrices & artisanes)</li>
          <li>Transmission du patrimoine et des gestes traditionnels</li>
          <li>Esthétique au service d&apos;un impact positif</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Rejoignez le mouvement</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Vous êtes une marque, un créateur, un mécène ou un amoureux du beau&nbsp;? Contactez-nous pour contribuer à cette célébration unique du luxe méditerranéen.
        </p>
        <div className="space-y-2 text-base">
          <p>📍 Nice Côte d&apos;Azur</p>
          <p>📧 contact@morpheus-sa.com</p>
          <p>🌐 morpheus-sa.com</p>
          <p>📞 +33 6 99 58 51 87</p>
        </div>
      </section>
    </main>
  );
}
