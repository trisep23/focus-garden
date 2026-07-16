import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Sprout } from "lucide-react";
import { supabase } from "../lib/supabase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Registration successful! Check your email.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT */}

          <div className="flex flex-col items-center justify-center px-10 py-14">

            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8">

              <Sprout
                size={52}
                className="text-green-600"
              />

            </div>

            <h1 className="text-4xl font-bold text-green-700">
              Focus Garden
            </h1>

            <p className="text-center text-green-600 mt-5 leading-8 max-w-xs">
              Grow your virtual garden every time you stay focused.
            </p>

          </div>

          {/* RIGHT */}

          <div className="px-10 py-14">

            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              Start your productivity journey today 🌱
            </p>

            <form onSubmit={handleRegister}>

              {/* EMAIL */}

              <div className="relative mb-5">

                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500
                  "
                />

              </div>

              {/* PASSWORD */}

              <div className="relative mb-8">

                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full
                    pl-12
                    pr-12
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-green-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-green-600
                  hover:bg-green-700
                  transition
                  text-white
                  font-semibold
                  text-lg
                "
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <p className="text-center mt-8 text-gray-500">
              Already have an account?{" "}
              <span className="text-green-600 font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;