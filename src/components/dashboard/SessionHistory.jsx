import {
  BookOpen,
  Code2,
  GraduationCap,
  Calendar,
  ChevronRight,
  Check,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const sessions = [
  {
    icon: <Code2 size={18} className="text-green-600" />,
    bg: "bg-green-100",
    title: "Dashboard UI Development",
    time: "09:00-09:25",
    duration: "25 min",
    day: "Today",
  },
  {
    icon: <BookOpen size={18} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Database Design",
    time: "13:15-14:05",
    duration: "50 min",
    day: "Today",
  },
  {
    icon: <GraduationCap size={18} className="text-orange-500" />,
    bg: "bg-orange-100",
    title: "Reading Journal",
    time: "19:30-20:15",
    duration: "45 min",
    day: "Yesterday",
  },
];

function SessionHistory() {

  const navigate = useNavigate();

  return (
    <section className="rounded-3xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>

          <h2 className="text-[18px] font-bold text-slate-900">
            Focus Journal
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your recent focus sessions
          </p>

        </div>

        <button
          onClick={() => navigate("/history")}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-green-50/40
          "
        >
          <Calendar size={16} />

          <span>View All</span>

          <ChevronRight size={15} />
        </button>

      </div>

      {/* Table */}

      <div>

        {sessions.map((session, index) => (

          <div
            key={index}
            className="
              grid
              grid-cols-12
              items-center
              border-b
              border-gray-100
              px-6
              py-4
              transition
              hover:bg-gray-50
              last:border-none
            "
          >
            {/* Icon */}

            <div className="col-span-1">

              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  ${session.bg}
                `}
              >
                {session.icon}
              </div>

            </div>

            {/* Title */}
                        {/* Title */}

            <div className="col-span-4">

              <h3 className="font-semibold text-slate-900">
                {session.title}
              </h3>

            </div>

            {/* Time */}

            <div className="col-span-2">

              <p className="text-sm text-gray-500">
                {session.time}
              </p>

            </div>

            {/* Duration */}

            <div className="col-span-2 flex justify-center">

              <span
               className="
                rounded-full
                bg-green-100
                px-2.5
                py-1
                text-xs
                font-semibold
                text-green-700
                "
              >
                {session.duration}
              </span>

            </div>

            {/* Day */}

            <div className="col-span-2 flex justify-center">

              <span className="text-sm text-gray-500">
                {session.day}
              </span>

            </div>

            {/* Status */}

            <div className="col-span-1 flex justify-end">

              <div
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-green-600
                "
              >
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-white"
                />
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SessionHistory;