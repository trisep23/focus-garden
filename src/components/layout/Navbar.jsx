function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6">
            <h1 className="text-2xl font-bold text-green-700">
                🌱 Focus Garden
            </h1>

            <div className="space-x-4">
                <button className="text-green-700">
                    Login
                </button>

                <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default Navbar;