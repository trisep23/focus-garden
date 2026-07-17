import {
  Clock3,
  Flame,
  Sprout,
  Star,
} from "lucide-react";

function StatsCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Today's Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Clock3 className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">Focus Time</span>
          </div>

          <span className="font-bold">
            2h 15m
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-gray-600">Current Streak</span>
          </div>

          <span className="font-bold">
            4 Days
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sprout className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">Sessions</span>
          </div>

          <span className="font-bold">
            18
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-600">XP Earned</span>
          </div>

          <span className="font-bold">
            +120 XP
          </span>
        </div>

      </div>

    </div>
  );
}

export default StatsCard;