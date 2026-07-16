import seed from "../../assets/images/plants/biji.jpg";
import sprout from "../../assets/images/plants/tunas.jpg";
import youngPlant from "../../assets/images/plants/pohon-muda.jpg";
import tree from "../../assets/images/plants/pohon-tua.jpg";

const plants = [
  {
    image: seed,
    title: "Seed",
    session: "Start",
  },
  {
    image: sprout,
    title: "Sprout",
    session: "5 Sessions",
  },
  {
    image: youngPlant,
    title: "Young Plant",
    session: "25 Sessions",
  },
  {
    image: tree,
    title: "Flourishing Tree",
    session: "100 Sessions",
  },
];

function PlantEvolution() {
  return (
    <section className="py-24 bg-[#F8FFF8]">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Build Your Garden
        </h2>

        <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto">
          Every focus session helps your virtual garden grow from a tiny seed
          into a flourishing tree.
        </p>

        <div className="relative mt-20">

          {/* Line */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-green-200 rounded-full"></div>

          <div className="grid md:grid-cols-4 gap-10 relative">

            {plants.map((plant, index) => (
              <div
                key={index}
                className="text-center"
              >

                <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg border border-green-100 flex items-center justify-center">

                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-20 h-20 object-contain"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-green-700">
                  {plant.title}
                </h3>

                <p className="mt-2 text-green-600 font-semibold">
                  {plant.session}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default PlantEvolution;