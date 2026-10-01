const plans = [
  {
    title: "STARTER",
    price: "$1,200",
    subtitle: "/project",
    description:
      "A sharp, conversion-ready site to get your offer live fast.",
    features: [
      "5-page custom website",
      "Mobile-first design",
      "Basic contact automation",
      "2 weeks turnaround",
      "30-day post-launch support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    title: "GROWTH",
    price: "$3,500",
    subtitle: "/project",
    description:
      "Full website plus an AI chatbot trained to sell and support for you.",
    features: [
      "Everything in Starter",
      "Custom AI chatbot",
      "CRM & email integration",
      "60-day post-launch support",
      "Monthly performance report",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    title: "FULL BUILD",
    price: "Custom",
    subtitle: "",
    description:
      "For teams needing a full digital system — site, AI agents, and automation.",
    features: [
      "Everything in Growth",
      "Multi-agent AI systems",
      "Custom internal dashboards",
      "Dedicated account lead",
      "Ongoing retainer available",
    ],
    button: "Book a Call",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <p className="uppercase text-indigo-600 tracking-[3px] text-sm font-semibold">
          — Pricing & Offers
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
          Pick a starting point. Every plan grows with you.
        </h2>

        <p className="text-gray-500 mt-5 text-lg max-w-2xl">
          Fixed scopes, transparent pricing — no vague "contact us for a quote"
          games.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16  ">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 bg-white transition-all duration-300  shadow-lg shadow-blue-400 hover:translate-y-2 hover:bg-blue-100  cursor-pointer ${
                plan.popular
                  ? "border-2 border-indigo-600"
                  : "border border-gray-200 "
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-6 bg-indigo-600 text-white px-5 py-2 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}

              <p className="text-gray-500 font-semibold tracking-wider text-sm">
                {plan.title}
              </p>

              <div className="flex items-end gap-2 mt-3">
                <h3 className="text-5xl font-bold">{plan.price}</h3>

                {plan.subtitle && (
                  <span className="text-gray-500 mb-2">
                    {plan.subtitle}
                  </span>
                )}
              </div>

              <p className="text-gray-500 mt-6 leading-8">
                {plan.description}
              </p>

              {/* Features */}

              <ul className="mt-8 space-y-5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold text-lg">
                      ✓
                    </span>

                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}

              <button
                className={`w-full mt-10 py-4 rounded-xl font-semibold transition cursor-pointer ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 hover:border-indigo-600 hover:text-indigo-600"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}