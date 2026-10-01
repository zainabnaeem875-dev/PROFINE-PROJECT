import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Trusted() {
  const trackRef = useRef<HTMLDivElement>(null);

  const companies = [
    "NORTHFIELD",
    "VERAX",
    "HALLMARK IND.",
    "ORBITAL",
    "MERIDIAN",
    "CRESTLINE",
  ];

  // Duplicate many times so there is never any empty space
  const items = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ];

  useGSAP(() => {
    const track = trackRef.current;

    if (!track) return;

    // Width of one complete set
    const oneSetWidth = track.scrollWidth / 6;

    gsap.set(track, {
      x: 0,
    });

    gsap.to(track, {
      x: -oneSetWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((value) => {
          return parseFloat(value) % oneSetWidth;
        }),
      },
    });
  }, []);

  return (
    <section className="bg-white py-8 overflow-hidden">

      <p className="text-center text-gray-500 font-bold text-sm md:text-lg">
        TRUSTED BY LEADING ORGANIZATIONS
      </p>

      <div className="overflow-hidden mt-10">

        <div
          ref={trackRef}
          className="flex w-max whitespace-nowrap"
        >
          {items.map((company, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                px-8
                md:px-12
                text-lg
                md:text-xl
                font-bold
                text-gray-500
                hover:text-black
                transition-colors
                duration-300
              "
            >
              {company}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Trusted;