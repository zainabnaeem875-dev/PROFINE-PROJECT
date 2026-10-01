import { FaGlobe, FaRobot, FaCog } from "react-icons/fa";

function Products() {
  const products = [
    {
      id: "01",
      category: "WEBSITES",
      icon: <FaGlobe />,
      title: "Custom Websites",
      description:
        "Fast, conversion-focused sites built from scratch — no bloated templates, no page-builder lag.",
      features: [
        "UX-researched structure",
        "Mobile-first, fully responsive",
        "SEO & performance baked in",
        "Delivered in 2–3 weeks",
      ],
    },
    {
      id: "02",
      category: "AI CHATBOTS",
      icon: <FaRobot />,
      title: "Trained AI Chatbots",
      description:
        "Agents trained on your business, your tone, and your data — handling support and sales 24/7.",
      features: [
        "Trained on your real documents",
        "Human handoff when needed",
        "Live on your site in days",
        "Learns and improves over time",
      ],
    },
    {
      id: "03",
      category: "AUTOMATION",
      icon: <FaCog />,
      title: "Growth Automation",
      description:
        "CRM syncs, lead routing, and workflows that remove manual busywork completely.",
      features: [
        "CRM & email integrations",
        "Automated lead follow-up",
        "Custom internal dashboards",
        "Full lifecycle coverage",
      ],
    },
  ];

  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <p className="text-blue-600 text-sm font-bold uppercase tracking-widest">
          — WHAT WE BUILD
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mt-3">
          Three products. One goal.
        </h2>

        <p className="mt-5 max-w-xl text-gray-500 text-lg leading-8">
          Everything we build is designed to reduce your workload,
          not add another tool to manage.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 cursor-pointer">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-blue-500 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-blue-600 text-xl">
                {item.icon}
              </div>

              {/* Category */}

              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-blue-600">
                {item.id} / {item.category}
              </p>

              {/* Title */}

              <h3 className="mt-4 text-3xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-gray-500 leading-8">
                {item.description}
              </p>

              {/* Divider */}

              <div className="border-b border-gray-200 my-6"></div>

              {/* Features */}

              <ul className="space-y-4">

                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {feature}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;