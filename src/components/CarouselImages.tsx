"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";

const images = [
    "Image1.png",
    "gallerie1.jpeg",
    "Image2.png",
    "gallerie2.jpeg",
    "Image3.png",
    "gallerie3.jpeg",
    "Image4.png",
    "gallerie4.jpeg",
    "Image5.png",
];


export default function CarouselImages() {
    const repeatedImages = [...images, ...images];
    const controls = useAnimation();
    const imageWidth = 384;
    const gap = 24;
    const totalWidth = repeatedImages.length * (imageWidth + gap);

    useEffect(() => {
        const animate = async () => {
            while (true) {
                await controls.start({
                    x: [-0, -totalWidth / 2],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    },
                });
            }
        };
        animate();
    }, [controls, totalWidth]);

    return (
        <div className="overflow-hidden w-full py-2 ">
            <motion.div
                className="flex space-x-6"
                animate={controls}
                style={{ width: totalWidth }}
            >
                {repeatedImages.map((img, idx) => (
                    <div
                        key={img + idx}
                        className="flex-shrink-0 w-96 bg-gray-50 rounded-lg shadow flex flex-col items-center"
                    >
                        <Image
                            src={`/images/${img}`}
                            alt={`MediTheria ${img}`}
                            className="w-full h-full object-cover rounded "
                            loading="lazy"
                            width={384}
                            height={384}
                        />

                    </div>
                ))}
            </motion.div>
        </div>
    );
}
