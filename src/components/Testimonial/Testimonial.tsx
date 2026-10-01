import { FaPlay } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="relative">

            <div className="relative h-[380px] rounded-2xl overflow-hidden">

              <img
                src="/testimonial/video.jpg"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#14224b]/80"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-10">

                <button className="w-16 h-16 rounded-full bg-indigo-950 flex justify-center items-center text-white text-xl hover:scale-110 duration-300 cursor-pointer">
                  <FaPlay />
                </button>

                <h3 className="text-white text-2xl font-bold mt-8">
                  How Circuit & Co Helped
                  <br />
                  NorthField Scale Their Growth
                </h3>

                <p className="uppercase text-sm tracking-[3px] text-gray-300 mt-4">
                  Client Success Story
                </p>

              </div>

              <div className="absolute left-5 bottom-5 bg-black/50 text-white px-4 py-2 rounded-lg text-sm border border-gray-700">
                🟢 Client Testimonial
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <p className="uppercase tracking-[3px] text-indigo-600 text-sm font-semibold">
              — WHAT OUR CLIENTS SAY
            </p>

            <h2 className="text-3xl font-bold text-[#0f172a] mt-4 leading-tight">
              Real clients. Real projects.
              <br />
              Real results.
            </h2>

            <blockquote className="border-l-4 border-indigo-600 pl-6 mt-10 italic text-gray-600 text-xl leading-9">
              "Working with Circuit & Co has been an outstanding
              experience. They delivered a high-quality website that
              aligned perfectly with our brand identity — on time,
              on budget, and beyond expectations."
            </blockquote>

            <div className="flex items-center gap-4 mt-10">

              <div className="w-14 h-14 rounded-full border-2 border-indigo-600 flex justify-center items-center font-bold text-indigo-600 cursor-pointer">
                M
              </div>

              <div>

                <h4 className="font-bold text-lg ">
                  Michael Loosli
                </h4>

                <p className="text-gray-500">
                  Owner, Northfield AG
                </p>

              </div>

            </div>

            <div className="flex gap-3 mt-10">

              <button className="px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 cursor-pointer">
                Michael L.
              </button>

              <button className="px-6 py-3 rounded-lg border border-gray-300 hover:border-indigo-600 cursor-pointer">
                Sarah K.
              </button>

              <button className="px-6 py-3 rounded-lg border border-gray-300 hover:border-indigo-600 cursor-pointer">
                James R.
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}