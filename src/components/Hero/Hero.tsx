
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-44 pb-24 text-center">

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,56,202,0.12),transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-700">

          <span className="h-2 w-2 rounded-full bg-indigo-700"></span>

          DIGITAL SYSTEMS STUDIO

        </div>

        {/* Heading */}

        <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">

          We build websites
          <br />

          <span className="text-indigo-700">
            that grow businesses.
          </span>

        </h1>

        {/* Paragraph */}

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-500">

          Custom websites. AI chatbots. Automation systems.
          Everything your business needs to attract more customers
          and save valuable time.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-lg bg-indigo-700 px-8 py-4 font-semibold text-white transition hover:bg-indigo-800 cursor-pointer">

            Book a Free Call

          </button>

          <button className="rounded-lg border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:border-indigo-700 hover:text-indigo-700 cursor-pointer">

            View Our Work

          </button>

        </div>

        {/* Certificates */}

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold cursor-pointer">
            ISO 9001 Certified
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold cursor-pointer">
            ISO 27001 Compliant
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold cursor-pointer">
            Trusted by 100+ Businesses
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;