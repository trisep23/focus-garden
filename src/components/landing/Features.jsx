import FeatureCard from "../ui/FeatureCard";

function Features() {
    return (
        <section className="py-28 px-8">

            <h2 className="text-5xl font-bold text-center text-green-700">
                Why Focus Garden?
            </h2>

            <p className="text-center text-gray-500 mt-5 mb-16">
                Everything you need to stay focused while growing your virtual garden.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

                <FeatureCard
                    icon="🌱"
                    title="Grow Your Plant"
                    description="Complete focus sessions to help your plant grow stronger."
                />

                <FeatureCard
                    icon="⏰"
                    title="Pomodoro Timer"
                    description="Stay productive using the Pomodoro technique."
                />

                <FeatureCard
                    icon="📈"
                    title="Track Progress"
                    description="Monitor your daily focus sessions and productivity."
                />

            </div>

        </section>
    );
}

export default Features;