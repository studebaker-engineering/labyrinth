import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export const EntranceText = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

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
      });
    },
    { scope: textRef },
  );

  return (
    <p ref={textRef} className="text-3xl">
      Entrance Text
    </p>
  );
};
