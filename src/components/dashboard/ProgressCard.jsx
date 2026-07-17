function ProgressCard({ current = 3, target = 15 }) {
  const progress = Math.round((current / target) * 100);

  return (
    <div>

      <div className="flex justify-between mb-2">

        <span className="font-medium">
          Growth Progress
        </span>

        <span className="font-semibold">
          {progress}%
        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full">

        <div
          className="bg-green-500 h-3 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProgressCard;