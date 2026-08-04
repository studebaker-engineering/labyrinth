import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const FOURTH_LINK_ITEMS = [
  { label: "Sub Link One", href: "/" },
  { label: "Sub Link Two", href: "/" },
  { label: "Sub Link Three", href: "/" },
  { label: "Sub Link Four", href: "/" },
];

export const MainNavigation = () => {
  const [isFourthLinkOpen, setIsFourthLinkOpen] = useState(false);
  const [isDropdownMounted, setIsDropdownMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openFourthLink = () => {
    setIsDropdownMounted(true);
    setIsFourthLinkOpen(true);
  };

  const closeFourthLink = () => setIsFourthLinkOpen(false);

  useGSAP(
    () => {
      if (!dropdownRef.current) return;
      if (isFourthLinkOpen) {
        gsap.fromTo(
          dropdownRef.current,
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        );
      } else if (isDropdownMounted) {
        gsap.to(dropdownRef.current, {
          y: -12,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setIsDropdownMounted(false),
        });
      }
    },
    [isFourthLinkOpen],
  );

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer" href="/">
            First Link
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer" href="/">
            Second Link
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer" href="/">
            Third Link
          </a>
          <div
            className="relative mr-5"
            role="none"
            tabIndex={-1}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                closeFourthLink();
              }
            }}
          >
            <button
              type="button"
              className="flex items-center hover:text-gray-900 cursor-pointer focus:outline-none"
              onClick={() =>
                isFourthLinkOpen ? closeFourthLink() : openFourthLink()
              }
              aria-expanded={isFourthLinkOpen}
            >
              Fourth Link
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className={`w-4 h-4 ml-1 transition-transform ${
                  isFourthLinkOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
              >
                <title>Dropdown Arrow</title>
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            {isDropdownMounted && (
              <div
                ref={dropdownRef}
                className="absolute left-0 top-full mt-2 flex flex-col items-start bg-white border border-gray-200 rounded shadow-md py-2 z-10 min-w-max"
              >
                {FOURTH_LINK_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-full text-left px-4 py-1 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button
          className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
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
    </header>
  );
};
