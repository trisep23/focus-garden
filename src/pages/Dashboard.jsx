import Header from "../components/dashboard/Header";
import PlantCard from "../components/dashboard/PlantCard";
import StatsCard from "../components/dashboard/StatsCard";
import GoalCard from "../components/dashboard/GoalCard";
import EvolutionCard from "../components/dashboard/EvolutionCard";
import SessionHistory from "../components/dashboard/SessionHistory";
import WeeklyFocus from "../components/dashboard/WeeklyFocus";
import ProductiveHours from "../components/dashboard/ProductiveHours";
import InsightCard from "../components/dashboard/InsightCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F6F8F5]">
      <div className="max-w-[1500px] mx-auto px-8 py-8">

        <Header />

        <div className="grid grid-cols-12 gap-6 mt-6">

          {/* LEFT */}
          <div className="col-span-12 xl:col-span-8">

            <div className="space-y-6">

              <PlantCard />

              <EvolutionCard />

              <SessionHistory />

              <WeeklyFocus />

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-12 xl:col-span-4">

            <div className="space-y-6">

              <StatsCard />

              <GoalCard />

              <ProductiveHours />

              <InsightCard />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;