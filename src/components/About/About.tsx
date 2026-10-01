const stats = [
  {
    number: "80+",
    title: "WEBSITES SHIPPED",
  },
  {
    number: "30+",
    title: "AI AGENTS DEPLOYED",
  },
  {
    number: "4 yrs",
    title: "IN BUSINESS",
  },
  {
    number: "98%",
    title: "CLIENT RETENTION",
  },
];

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>
            <p className="text-indigo-600 uppercase tracking-[3px] text-xs font-semibold">
              — ABOUT US
            </p>

            <h2 className="text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight mt-4 ">
              We're not a big agency.
              <br />
              That's the point.
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Circuit & Co is a small, senior team of designers,
              developers, and AI engineers.
              <span className="font-semibold text-slate-900">
                {" "}
                No account managers, no hand-offs to junior teams
              </span>{" "}
              — the people who scope your project are the ones who build it.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              We work with businesses in industrial tech,
              logistics, and retail who need software that
              actually reduces their workload, not adds another
              tool to manage.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Our promise:
              <span className="font-semibold text-slate-900">
                {" "}
                ship fast, build it right, stay reachable
              </span>{" "}
              long after launch.
            </p>
          </div>

          {/* Right Side */}

          <div className="border border-gray-200 rounded-2xl overflow-hidden ">

            <div className="grid grid-cols-2">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 ${
                    index === 0
                      ? "border-r border-b"
                      : index === 1
                      ? "border-b"
                      : index === 2
                      ? "border-r"
                      : ""
                  } border-gray-200`}
                >
                  <h3 className="text-4xl font-bold text-indigo-600">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-wide text-gray-600 font-medium">
                    {item.title}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}