export default function Contact() {
  return (
    <section className="bg-white py-16 px-30">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div>

            <p className="text-indigo-600 uppercase tracking-[3px] text-xs font-semibold">
              — CONTACT
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Tell us what you're
              <br />
              building.
            </h2>

            <p className="text-gray-500 text-lg leading-8 mt-6 max-w-md">
              Whether it's a website, an AI chatbot, or a full
              system — let's talk. First call is always free.
            </p>

            <div className="mt-12 space-y-10">

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                  EMAIL
                </h4>

                <p className="text-1xl font-semibold text-slate-900 mt-2">
                  hello@circuitand.co
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                  PHONE
                </h4>

                <p className="text-1xl font-semibold text-slate-900 mt-2">
                  +1 (555) 012-3456
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                  LOCATION
                </h4>

                <p className="text-1xl font-semibold text-slate-900 mt-2">
                  Remote-first · Clients worldwide
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form className="space-y-6">

            <div>
              <label className="block font-semibold text-slate-800 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-2">
                Company
              </label>

              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-2">
                What are you looking to build?
              </label>

              <textarea
                rows={5}
                placeholder="A website, an AI chatbot, or both..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-indigo-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold transition duration-300 cursor-pointer"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}