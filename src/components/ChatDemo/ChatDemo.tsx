export default function ChatDemo() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-indigo-600 uppercase tracking-[3px] text-sm font-semibold">
              — SEE IT LIVE
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-5 leading-tight">
              A chatbot that knows your
              <br />
              business.
            </h2>

            <p className="text-gray-500 text-xl leading-9 mt-6">
              Every agent we deploy is trained on your real
              documents, pricing, and policies — not generic
              scripts.
            </p>

            <ul className="mt-10">

              <li className="flex items-center gap-3 py-4 border-b border-gray-200">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-lg text-slate-700">
                  Trained on your PDFs, docs & FAQs
                </span>
              </li>

              <li className="flex items-center gap-3 py-4 border-b border-gray-200">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-lg text-slate-700">
                  Responds in your brand's tone
                </span>
              </li>

              <li className="flex items-center gap-3 py-4 border-b border-gray-200">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-lg text-slate-700">
                  Escalates to your team when needed
                </span>
              </li>

              <li className="flex items-center gap-3 py-4">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-lg text-slate-700">
                  Average reply time under 2 seconds
                </span>
              </li>

            </ul>

          </div>

          {/* Right Side */}

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">

            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <p className="text-gray-600 font-medium">
                your-ai-agent · online
              </p>
            </div>

            <video
              className="w-full h-[300px] object-cover cursor-pointer"
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
              <span>Trained on your business</span>
              <span>AI Demo</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}