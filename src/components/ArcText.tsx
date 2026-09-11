import { useId, useLayoutEffect, useRef, useState } from "react";

type ArcTextProps = {
	text: string;
	fontSize: number;
	arcRatio: number;
};

export const ArcText = ({ text, fontSize, arcRatio }: ArcTextProps) => {
	const pathId = useId();
	const measureRef = useRef<SVGTextElement>(null);
	const [width, setWidth] = useState(fontSize * text.length * 0.65);

	useLayoutEffect(() => {
		const measure = () => {
			const el = measureRef.current;
			if (el) setWidth(el.getComputedTextLength());
		};
		measure();
		document.fonts.ready.then(measure);
	}, []);

	const arcHeight = width * arcRatio;
	const height = fontSize * 1.3 + arcHeight;
	const baseline = height - fontSize * 0.3;
	const midY = baseline - arcHeight;

	// advance width undershoots the glyphs' ink (italic overhang, trailing
	// swashes), so pad the viewBox rather than clipping to the measured box
	const pad = fontSize * 0.25;

	return (
		<svg
			viewBox={`${-pad} 0 ${width + pad * 2} ${height}`}
			className="w-full"
			aria-hidden="true"
		>
			{/* invisible twin used only to measure the font's natural advance width */}
			<text
				ref={measureRef}
				className="font-brush uppercase"
				style={{ fontSize, visibility: "hidden" }}
			>
				{text}
			</text>
			<path
				id={pathId}
				d={`M 0 ${baseline} Q ${width / 2} ${midY} ${width} ${baseline}`}
				fill="none"
			/>
			<text
				className="font-brush uppercase"
				style={{ fontSize, fill: "currentColor" }}
				textAnchor="middle"
			>
				<textPath href={`#${pathId}`} startOffset="50%">
					{text}
				</textPath>
			</text>
		</svg>
	);
};
