import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "WEB DESIGN",
    image: "/project/1.jpg",
    bg: "bg-[#EAE5F8]",
  },
  {
    id: 2,
    title: "Project 2",
    category: "REACT",
    image: "/project/2.jpg",
    bg: "bg-[#F7EFE4]",
  },
 {
    id: 3,
    title: "Project 3",
    category: "TRAVEL APP",
    image: "/project/3.jpg",
    bg: "bg-[#EAF7F0]",
  },
  {
    id: 4,
    title: "Project 4",
    category: "COMPANY",
    image: "/project/4.jpg",
    bg: "bg-[#E7EEF9]",
  },
  {
    id: 5,
    title: "Project 5",
    category: "PROPERTY",
    image: "/project/5.jpg",
    bg: "bg-[#FFF2C7]",
  },
  {
    id: 6,
    title: "Project 6",
    category: "FASHION",
    image: "/project/6.jpg",
    bg: "bg-[#F8E7EF]",
  },
  {
    id: 7,
    title: "Project 7",
    category: "TRAVEL",
    image: "/project/7.jpg",
    bg: "bg-[#EAF7F0]",
  },
];

export default function Portfolio() {
  const marqueeRef = useRef(null);
useGSAP(() => {
    gsap.to(marqueeRef.current, {
      x: "30%",      // Left to Right
      duration: 5,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <section className="bg-[#0D0D11] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-indigo-400 uppercase tracking-[4px] text-xs">
              — Portfolio
            </span>

            <h2 className="text-white text-5xl font-bold mt-4">
              Trusted by Leading Organizations
            </h2>

            <p className="text-gray-400 mt-4">
              Organizations across industries trust us to power their digital
              growth.
            </p>
          </div>

          <button className="border border-gray-700 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black duration-300 cursor-pointer">
            View All Projects →
          </button>
        </div>

        <div 
        ref = {marqueeRef}
        className="grid grid-cols-7 gap-4 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative h-44 rounded-xl overflow-hidden group ${project.bg}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 duration-500">
                <p className="text-[10px] uppercase tracking-widest text-gray-300">
                  {project.category}
                </p>

                <h3 className="text-white font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}