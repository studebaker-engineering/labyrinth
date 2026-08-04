import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const EntranceText = () => {
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!textRef.current) return;

			const split = new SplitText(textRef.current, { type: "chars" });

			gsap.from(split.chars, {
				opacity: 0,
				y: 12,
				duration: 0.5,
				ease: "power2.out",
				stagger: 0.03,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 90%",
				},
			});
		},
		{ scope: textRef },
	);

	return (
		<div className="mb-20">
			<h2 ref={textRef}>Entrance Text</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
	);
};
