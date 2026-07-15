function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🌱 Gamify Your Productivity
          </span>

          <h1 className="text-6xl font-bold text-green-700 mt-8 leading-tight">
            Grow Your Focus,
            <br />
            Grow Your Garden.
          </h1>

          <p className="text-xl text-gray-600 mt-8 leading-9">
            Focus Garden helps you stay productive using a Pomodoro timer while
            growing a beautiful virtual garden as a reward for every completed
            session.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Start Growing
            </button>

            <button className="border border-green-600 text-green-700 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-xl p-8 w-[360px]">

            <div className="text-center text-6xl">
              🌱
            </div>

            <h3 className="text-center text-2xl font-bold mt-5">
              Today's Focus
            </h3>

            <p className="text-center text-5xl font-bold text-green-700 mt-6">
              01:25:00
            </p>

            <div className="bg-gray-200 rounded-full h-3 mt-8">

              <div className="bg-green-600 h-3 rounded-full w-3/4"></div>

            </div>

            <div className="flex justify-between mt-8">

              <div>

                <p className="text-gray-500 text-sm">
                  Plant
                </p>

                <h4 className="font-bold">
                  Level 2
                </h4>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Streak
                </p>

                <h4 className="font-bold">
                  🔥 5 Days
                </h4>

              </div>

            </div>

            <button className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl font-semibold">
              Focus Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;