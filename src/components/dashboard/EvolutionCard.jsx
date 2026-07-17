import seed from "../../assets/images/plants/biji.png";
import sprout from "../../assets/images/plants/tunas.png";
import young from "../../assets/images/plants/pohon-muda.png";
import tree from "../../assets/images/plants/pohon-tua.png";

function EvolutionCard() {
  const currentSession = 3;

  const stages = [
    {
      name: "Seed",
      session: "Current",
      image: seed,
      active: true,
    },
    {
      name: "Sprout",
      session: "15 Sessions",
      image: sprout,
      active: false,
    },
    {
      name: "Young Plant",
      session: "50 Sessions",
      image: young,
      active: false,
    },
    {
      name: "Flourishing Tree",
      session: "100 Sessions",
      image: tree,
      active: false,
    },
  ];

  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}

      <div>

        <h2 className="text-[18px] font-bold text-slate-900">
          Garden Evolution
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Watch your plant grow as you complete focus sessions.
        </p>

      </div>

      {/* Timeline */}

      <div className="mt-8 flex items-center justify-between">

        {stages.map((stage, index) => (
          <div
            key={stage.name}
            className="flex flex-1 items-center"
          >
            {/* Item */}

            <div className="flex flex-col items-center">

              <div
                className={`
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all

                  ${
                    stage.active
                      ? "border-green-400 bg-green-50 shadow-sm"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                <img
                  src={stage.image}
                  alt={stage.name}
                  className={`
                    object-contain

                    ${
                      stage.name === "Flourishing Tree"
                        ? "w-14"
                        : "w-12"
                    }
                  `}
                />
              </div>

              <h3
                className={`
                  mt-3
                  text-sm
                  font-semibold

                  ${
                    stage.active
                      ? "text-green-700"
                      : "text-slate-700"
                  }
                `}
              >
                {stage.name}
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                {stage.session}
              </p>

            </div>

            {/* Connector */}
                        {index !== stages.length - 1 && (
              <div className="mx-6 flex-1">

                <div
                  className="
                    h-[2px]
                    w-full
                    border-t-2
                    border-dashed
                    border-gray-300
                  "
                />

              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  );
}

export default EvolutionCard;