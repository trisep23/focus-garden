function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center mt-24">

            <div className="text-8xl">
                🌱
            </div>

            <h2 className="text-6xl font-bold text-green-700 mt-6">
                Grow Your Focus
            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-xl">
                Stay productive while growing your virtual garden.
            </p>

            <button className="mt-10 bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition">
                Start Growing
            </button>

        </section>
    );
}

export default Hero;