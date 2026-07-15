function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2">

            <div className="text-5xl mb-6">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-green-700">
                {title}
            </h3>

            <p className="text-gray-500 mt-4">
                {description}
            </p>

        </div>
    );
}

export default FeatureCard;