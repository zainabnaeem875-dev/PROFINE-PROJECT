function Journey() {
  const timeline = [
    {
      id: "01",
      year: "2021",
      title: "Two freelancers, one shared inbox",
      desc: "Circuit & Co started as a side project — building fast, no-nonsense websites for local businesses tired of clunky templates and slow turnarounds.",
    },
    {
      id: "02",
      year: "2022",
      title: "First enterprise client, first real team",
      desc: "A logistics company asked us to replace their support inbox with something smarter. Our first AI chatbot cut their response time by 70%.",
    },
    {
      id: "03",
      year: "2023",
      title: "AI chatbots became a full product line",
      desc: "We formalized our chatbot builds into a repeatable system — trainable on any business's data, deployable in days, not months.",
    },
    {
      id: "04",
      year: "TODAY",
      title: "A full studio, still small on purpose",
      desc: "80+ websites and 30+ AI Agents shipped across industrial tech, retail, and logistics — and we still take every call personally.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-20">

        {/* Left Side */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            — OUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold leading-tight mt-4">
            Four years, one obsession:
            <br />
            build things that work.
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-8">
            We started as two developers frustrated with agencies that
            shipped pretty sites and disappeared. Here's how that turned
            into a full studio.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="absolute left-5 top-0 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.id} className="flex gap-5 relative">

                <div className="h-10 w-18 rounded-4xl border-2 border-gray-300 bg-white flex items-center justify-center text-blue-600 font-bold z-10">
                  {item.id}
                </div>

                <div>
                  <p className="text-blue-600 text-sm font-semibold">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold mt-1 cursor-pointer">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;