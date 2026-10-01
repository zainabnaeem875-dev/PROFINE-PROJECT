function StatBar() {
  const stats = [
    {
      id: 1,
      number: "4+",
      title: "Years Experience",
    },
    {
      id: 2,
      number: "80+",
      title: "Projects Completed",
    },
    {
      id: 3,
      number: "30+",
      title: "Happy Clients",
    },
    {
      id: 4,
      number: "98%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-black py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.id}
            className="border border-gray-500 rounded-lg p-6 text-center hover:border-indigo-500 transition duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-400 text-base md:text-lg">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default StatBar;