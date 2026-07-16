import { Play, Clock3, Sprout, Trophy } from "lucide-react";

const steps = [
  {
    icon: Play,
    title: "Start Focus",
    description: "Choose a task and start your Pomodoro session.",
  },
  {
    icon: Clock3,
    title: "Stay Focused",
    description: "Keep your attention until the timer finishes.",
  },
  {
    icon: Sprout,
    title: "Grow Plant",
    description: "Every completed session helps your plant grow.",
  },
  {
    icon: Trophy,
    title: "Unlock Rewards",
    description: "Reach new levels and unlock unique plants.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-green-700">
          How It Works
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-20">
          Stay productive in four simple steps.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative text-center">

                {/* Circle Icon */}
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Icon className="text-green-600" size={36} />
                </div>

                {/* Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-1 bg-green-200"></div>
                )}

                <h3 className="mt-8 text-2xl font-bold text-green-700">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;