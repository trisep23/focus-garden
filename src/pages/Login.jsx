import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Sprout } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div
        className="
            flex
            flex-col
            justify-center
            items-center
            lg:items-start
            text-center
            lg:text-left
            lg:translate-x-14
        "
        >

        <Sprout
            size={64}
            className="text-green-600 mb-6"
        />

        <h1 className="text-5xl lg:text-6xl font-bold text-green-700">
            Focus Garden
        </h1>

        <p className="mt-5 text-xl leading-9 text-green-600 max-w-sm">
            Welcome back.
            <br />
            Continue growing your garden.
        </p>

        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md mx-auto">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-3 mb-8">
            Login to continue your journey.
          </p>

          <form onSubmit={handleLogin}>

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
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
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
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;