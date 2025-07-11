"use client";
import * as React from "react";

import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
}

interface iISmoothScrollHeroBackgroundProps extends iISmoothScrollHeroProps { }

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	scrollHeight,
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
}) => {
		const { scrollY } = useScroll();

		const clipStart = useTransform(
			scrollY,
			[0, scrollHeight],
			[initialClipPercentage, 0],
		);
		const clipEnd = useTransform(
			scrollY,
			[0, scrollHeight],
			[10, 1],
		);
		const gray = useTransform(
			scrollY,
			[0, scrollHeight],
			[100, 20],
		);

		const clipPath = useMotionTemplate`inset(${clipEnd}%)`;
		const grayScale = useMotionTemplate`grayscale(${gray}%)`;

		const backgroundSize = useTransform(
			scrollY,
			[0, scrollHeight + 500],
			["170%", "100%"],
		);

		return (
			<div className="w-full h-screen flex justify-center items-center">
				<motion.img
					src="/images/homebanner.png"
					alt="background"
					className="w-screen h-auto"
					style={{
						clipPath,
						filter: grayScale,
					}}
				/>
			</div>
		)

		return (
			<motion.div
				className="sticky top-0 h-screen w-full bg-black"
				style={{
					clipPath,
					// willChange: "transform, opacity",
				}}
			>
				{/* Mobile background */}
				<motion.div
					className="absolute inset-0 md:hidden"
					style={{
						backgroundImage: `url(${mobileImage})`,
						backgroundSize,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
				{/* Desktop background */}
				<motion.div
					className="absolute inset-0 hidden md:block"
					style={{
						backgroundImage: `url(${desktopImage})`,
						backgroundPosition: "center",
						backgroundSize,
						backgroundRepeat: "no-repeat",
					}}
				/>
			</motion.div>
		);
	};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "/images/homebanner.png",
	mobileImage = "/images/homebanner.png",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	return (
		<div
			// style={{height: `calc(${scrollHeight}px)`}}
			className="relative w-full"
		>
			<SmoothScrollHeroBackground
				scrollHeight={scrollHeight}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
			/>
		</div>
	);
};
export default SmoothScrollHero;
