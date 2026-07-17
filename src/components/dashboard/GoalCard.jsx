import { Target } from "lucide-react";

function GoalCard() {
  const goal = 65;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
          <Target className="w-5 h-5 text-green-600" />
        </div>

        <div>
          <h2 className="font-bold text-lg text-gray-900">
            Today's Goal
          </h2>

          <p className="text-sm text-gray-500">
            Complete your daily target
          </p>
        </div>

      </div>

      <div className="flex justify-between mb-2">

        <span className="text-sm text-gray-500">
          Daily Progress
        </span>

        <span className="font-semibold text-green-600">
          {goal}%
        </span>

      </div>

      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

        <div
          className="h-full rounded-full bg-green-500"
          style={{
            width: `${goal}%`,
          }}
        />

      </div>

      <div className="mt-5 rounded-xl bg-green-50 p-4">

        <p className="font-semibold text-green-700">
          Need 2 more sessions
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Finish today's goal to earn bonus XP.
        </p>

      </div>

    </div>
  );
}

export default GoalCard;