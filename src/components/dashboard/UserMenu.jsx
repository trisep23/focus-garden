import { useState, useRef, useEffect } from "react";
import {
  User,
  Leaf,
  BarChart3,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

function UserMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  const menuItem =
    "flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700";

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-green-100
          transition-all
          duration-200
          hover:bg-green-200
        "
      >
        <span className="text-LG font-bold text-green-700">
          T
        </span>
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-14
            z-50
            w-56
            rounded-xl
            border
            border-gray-100
            bg-white
            p-2
            shadow-lg
          "
        >
          <button className={menuItem}>
            <User size={18} />
            <span>My Profile</span>
          </button>

          <button className={menuItem}>
            <Leaf size={18} />
            <span>My Garden</span>
          </button>

          <button className={menuItem}>
            <BarChart3 size={18} />
            <span>Statistics</span>
          </button>

          <div className="my-2 border-t border-gray-100" />

          <button
            onClick={handleLogout}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-lg
              px-3
              py-2.5
              text-sm
              text-red-500
              transition-all
              duration-200
              hover:bg-red-50
              hover:text-red-600
            "
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;