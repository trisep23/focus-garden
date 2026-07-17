import { Sprout, Star } from "lucide-react";
import seed from "../../assets/images/plants/biji.png";
import StartButton from "./StartButton";

export default function PlantCard() {
  const currentSessions = 3;
  const requiredSessions = 15;

  const progressBlocks = 10;

  const activeBlocks = Math.ceil(
    (currentSessions / requiredSessions) * progressBlocks
  );

  const remaining = requiredSessions - currentSessions;

  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-[32px] font-bold text-slate-900">
            Current Plant
          </h2>

          <p className="mt-1 text-gray-500">
            Keep growing every focus session.
          </p>

        </div>

        <div className="rounded-full bg-green-100 px-5 py-2">

          <span className="font-semibold text-green-700">
            20% to Sprout
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="mt-10 grid grid-cols-12 items-center gap-8">

        {/* Plant */}

        <div className="col-span-4 flex items-center justify-center">

          <div className="relative flex items-center justify-center">

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[320px]
                h-[320px]

                rounded-full

                bg-[radial-gradient(circle,rgba(134,239,172,.55)_0%,rgba(187,247,208,.28)_40%,transparent_75%)]

                blur-3xl
              "
            />

            <img
              src={seed}
              alt="Seed"
              className="relative w-60 object-contain drop-shadow-lg"
            />

          </div>

        </div>

        {/* Right */}

        <div className="col-span-8">

          <div className="flex items-center gap-3">

            <h3 className="text-[42px] font-bold leading-none text-slate-900">
              Seed
            </h3>

            <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">

              <Sprout
                size={14}
                className="text-green-600"
              />

              <span className="text-xs font-semibold text-green-700">
                Level 1
              </span>

            </div>

          </div>

          <p className="mt-3 max-w-md text-base leading-7 text-gray-500">

            Grow your garden by completing
            focus sessions every day.

          </p>

          {/* Progress */}

          <div className="mt-6 flex gap-2">

            {Array.from({
              length: progressBlocks,
            }).map((_, index) => (

              <div
                key={index}
                className={`

                  h-2
                  flex-1
                  rounded-full

                  ${
                    index < activeBlocks
                      ? "bg-green-500"
                      : "bg-gray-200"
                  }

                `}
              />

            ))}

          </div>

          <div className="mt-3 flex items-center justify-between">

            <p className="text-lg font-semibold text-slate-900">

              {currentSessions} / {requiredSessions} Sessions

            </p>

            <p className="text-sm text-gray-500">

              Goal

            </p>

          </div>

          <p className="mt-4 text-base text-gray-600">

            Need{" "}

            <span className="font-bold text-green-600">

              {remaining}

            </span>{" "}

            more sessions to unlock{" "}

            <span className="font-bold text-slate-900">

              Sprout 🌱

            </span>

          </p>
<div className="mt-5 grid grid-cols-[260px_280px] gap-5 items-stretch">
          
                        {/* XP Card */}

                      <div
                        className="
                          h-16
                          rounded-xl
                          border
                          border-amber-200
                          bg-white
                          px-5

                          flex
                          items-center
                        "
                      >

                        <div className="flex items-center gap-3">

                          <div
                            className="
                              h-10
                              w-10
                              rounded-lg
                              bg-amber-100

                              flex
                              items-center
                              justify-center
                            "
                          >

                            <Star
                              size={18}
                              className="fill-amber-500 text-amber-500"
                            />

                          </div>

                          <div>

                            <h4 className="text-xl font-bold text-amber-600">
                              +120 XP
                            </h4>

                            <p className="text-[11px] text-gray-500">
                              Keep it up! You're doing great.
                            </p>

                          </div>

                        </div>

                      </div>

            {/* Button */}

            <div className="h-16">

              <div className="h-full w-full">

                <StartButton />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}