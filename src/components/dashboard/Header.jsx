import UserMenu from "./UserMenu";
import { Sprout } from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-3xl border border-gray-100 bg-white px-8 py-4 shadow-sm">

      <div className="flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-green-100
            "
          >
            <Sprout
              size={24}
              className="text-green-600"
            />
          </div>

          <div>

            <h1 className="text-[22px] font-bold text-slate-900 leading-none">

              Welcome Back, Triseptiani 👋

            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

              <span>{today}</span>

              <span>•</span>

              <span>Keep growing your garden 🌱</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <UserMenu />

      </div>

    </div>
  );
}

export default Header;