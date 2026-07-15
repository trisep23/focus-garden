import FeatureCard from "../ui/FeatureCard";
import { Sprout, TimerReset, ChartColumn } from "lucide-react";
function Features() {
    return (
        <section className="py-16 px-8">

            <h2 className="text-5xl font-bold text-center text-green-700">
                Why Focus Garden?
            </h2>

            <p className="text-center text-gray-500 mt-5 mb-16">
                Everything you need to stay focused while growing your virtual garden.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

                <FeatureCard
                    icon={<Sprout size={42} className="text-green-600" />}
                    title="Grow Your Plant"
                    description="Complete focus sessions to help your plant grow stronger."
                />

                <FeatureCard
                    icon={<TimerReset size={42} className="text-green-600" />}
                    title="Pomodoro Timer"
                    description="Stay productive using the Pomodoro technique."
                />

                <FeatureCard
                    icon={<ChartColumn size={42} className="text-green-600" />}
                    title="Track Progress"
                    description="Monitor your daily focus sessions and productivity."
                />

            </div>

        </section>
    );
}

export default Features;