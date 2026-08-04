import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
	{ label: "First Link", href: "/" },
	{ label: "Second Link", href: "/" },
	{ label: "Third Link", href: "/" },
];

const FOURTH_LINK_ITEMS = [
	{ label: "Sub Link One", href: "/" },
	{ label: "Sub Link Two", href: "/" },
	{ label: "Sub Link Three", href: "/" },
	{ label: "Sub Link Four", href: "/" },
];

interface FourthLinkMenuProps {
	variant: "popover" | "inline";
	onNavigate?: () => void;
}

const FourthLinkMenu = ({ variant, onNavigate }: FourthLinkMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);

	const open = () => {
		setIsMounted(true);
		setIsOpen(true);
	};

	const close = () => setIsOpen(false);

	useGSAP(() => {
		if (!panelRef.current) return;
		if (isOpen) {
			gsap.fromTo(
				panelRef.current,
				{ y: -12, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
			);
		} else if (isMounted) {
			gsap.to(panelRef.current, {
				y: -12,
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
				onComplete: () => setIsMounted(false),
			});
		}
	}, [isOpen]);

	return (
		<div
			className={variant === "popover" ? "relative" : "w-full"}
			role="none"
			tabIndex={-1}
			onBlur={(event) => {
				if (
					variant === "popover" &&
					!event.currentTarget.contains(event.relatedTarget)
				) {
					close();
				}
			}}
		>
			<button
				type="button"
				className="flex items-center hover:text-gray-900 cursor-pointer focus:outline-none"
				onClick={() => (isOpen ? close() : open())}
				aria-expanded={isOpen}
			>
				Fourth Link
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					className={`w-4 h-4 ml-1 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
					viewBox="0 0 24 24"
				>
					<title>Dropdown Arrow</title>
					<path d="M6 9l6 6 6-6"></path>
				</svg>
			</button>
			{isMounted && (
				<div
					ref={panelRef}
					className={
						variant === "popover"
							? "absolute left-0 top-full mt-2 flex flex-col items-start bg-white border border-gray-200 rounded shadow-md py-2 z-10 min-w-max"
							: "flex flex-col items-start gap-y-3 mt-3 pl-4"
					}
				>
					{FOURTH_LINK_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							onClick={onNavigate}
							className={
								variant === "popover"
									? "w-full text-left px-4 py-1 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
									: "hover:text-gray-900 cursor-pointer"
							}
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export const MainNavigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileMenuMounted, setIsMobileMenuMounted] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const openMobileMenu = () => {
		setIsMobileMenuMounted(true);
		setIsMobileMenuOpen(true);
	};

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	useGSAP(() => {
		if (!mobileMenuRef.current) return;
		if (isMobileMenuOpen) {
			gsap.fromTo(
				mobileMenuRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.25, ease: "power2.out" },
			);
		} else if (isMobileMenuMounted) {
			gsap.to(mobileMenuRef.current, {
				opacity: 0,
				duration: 0.2,
				ease: "power2.in",
				onComplete: () => setIsMobileMenuMounted(false),
			});
		}
	}, [isMobileMenuOpen]);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex items-center justify-between px-3 py-5 md:px-5">
				<a
					className="flex title-font font-medium items-center text-gray-900"
					href="/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-10 h-10 text-gray-400 p-2 bg-gray-200 rounded-full"
						viewBox="0 0 24 24"
					>
						<title>App Icon</title>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Studebaker Engineering</span>
				</a>

				<div className="hidden md:flex md:items-center">
					<nav className="flex items-center text-base">
						{NAV_LINKS.map((link) => (
							<a
								key={link.label}
								className="mr-5 hover:text-gray-900 cursor-pointer"
								href={link.href}
							>
								{link.label}
							</a>
						))}
						<div className="mr-5">
							<FourthLinkMenu variant="popover" />
						</div>
					</nav>
					<button
						className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base"
						type="button"
					>
						Button
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<title>Arrow Icon</title>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>

				<button
					type="button"
					className="md:hidden flex items-center justify-center w-10 h-10 text-gray-400 p-2 bg-gray-200 rounded-full cursor-pointer"
					onClick={openMobileMenu}
					aria-label="Open menu"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-full h-full"
						viewBox="0 0 24 24"
					>
						<title>Menu Icon</title>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			{isMobileMenuMounted && (
				<div
					ref={mobileMenuRef}
					className="fixed inset-0 z-50 bg-white flex flex-col px-3 py-5 md:hidden"
				>
					<div className="flex items-center justify-between">
						<a
							className="flex title-font font-medium items-center text-gray-900"
							href="/"
							onClick={closeMobileMenu}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-10 h-10 text-gray-400 p-2 bg-gray-200 rounded-full"
								viewBox="0 0 24 24"
							>
								<title>App Icon</title>
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<span className="ml-3 text-xl">Studebaker Engineering</span>
						</a>
						<button
							type="button"
							className="flex items-center justify-center w-10 h-10 text-gray-400 p-2 bg-gray-200 rounded-full cursor-pointer"
							onClick={closeMobileMenu}
							aria-label="Close menu"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-full h-full"
								viewBox="0 0 24 24"
							>
								<title>Close Icon</title>
								<path d="M6 6l12 12M18 6L6 18"></path>
							</svg>
						</button>
					</div>

					<nav className="flex flex-col items-start gap-y-6 text-lg mt-10">
						{NAV_LINKS.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={closeMobileMenu}
								className="hover:text-gray-900 cursor-pointer"
							>
								{link.label}
							</a>
						))}
						<FourthLinkMenu variant="inline" onNavigate={closeMobileMenu} />
						<button
							className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base"
							type="button"
						>
							Button
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-4 h-4 ml-1"
								viewBox="0 0 24 24"
							>
								<title>Arrow Icon</title>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
					</nav>
				</div>
			)}
		</header>
	);
};
