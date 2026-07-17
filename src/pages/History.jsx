import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Check,
  Code2,
  BookOpen,
  GraduationCap,
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
    date: "2026-07-17",
  },
  {
    icon: <BookOpen size={18} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Database Design",
    time: "13:15-14:05",
    duration: "50 min",
    day: "Today",
    date: "2026-07-17",
  },
  {
    icon: <GraduationCap size={18} className="text-orange-500" />,
    bg: "bg-orange-100",
    title: "Reading Journal",
    time: "19:30-20:15",
    duration: "45 min",
    day: "Yesterday",
    date: "2026-07-16",
  },
];

function History() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const filteredSessions = sessions.filter(
    (session) => session.date === formattedDate
);

  const totalSessions = filteredSessions.length;

  const totalMinutes = filteredSessions.reduce(
    (total, session) => total + parseInt(session.duration),
    0
  );

  const averageMinutes = Math.round(totalMinutes / totalSessions);

  return (
    
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-sm">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-100 p-6">

          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate(-1)}
              className="rounded-xl border border-gray-200 p-2 hover:bg-gray-100"
            >
              <ArrowLeft size={18} />
            </button>

            <div>

              <h1 className="text-2xl font-bold">
                Focus History
              </h1>

              <p className="text-sm text-gray-500">
                All your completed focus sessions
              </p>

            </div>

          </div>

          <div className="relative">
            <CalendarDays
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
            />

            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd MMMM yyyy"
                className="
                w-56
                rounded-xl
                border
                border-gray-200
                bg-white
                py-2
                pl-11
                pr-10
                font-medium
                outline-none
                transition
                hover:bg-gray-50
                focus:border-green-500
                "
            />

            <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            </div>

        </div>

<div className="grid grid-cols-3 gap-5 border-b border-gray-100 p-6">

  <div className="rounded-2xl bg-green-50 p-5">
    <p className="text-sm text-gray-500">Sessions</p>
    <h2 className="mt-2 text-3xl font-bold">{totalSessions}</h2>
  </div>

  <div className="rounded-2xl bg-blue-50 p-5">
    <p className="text-sm text-gray-500">Focus Time</p>
    <h2 className="mt-2 text-3xl font-bold">
      {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
    </h2>
  </div>

  <div className="rounded-2xl bg-orange-50 p-5">
    <p className="text-sm text-gray-500">Avg Time</p>
    <h2 className="mt-2 text-3xl font-bold">{averageMinutes} min</h2>
  </div>

</div>

        {/* List */}

        {filteredSessions.map((session, index) => (

          <div
            key={index}
            className="grid grid-cols-12 items-center border-b border-gray-100 px-6 py-5 last:border-none"
          >

            <div className="col-span-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${session.bg}`}
              >
                {session.icon}
              </div>
            </div>

            <div className="col-span-4 font-semibold">
              {session.title}
            </div>

            <div className="col-span-2 text-sm text-gray-500">
              {session.time}
            </div>

            <div className="col-span-2">
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                {session.duration}
              </span>
            </div>

            <div className="col-span-2 text-sm text-gray-500">
              {session.day}
            </div>

            <div className="col-span-1 flex justify-end">

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600">

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

    </div>
  );
}

export default History;