function FeatureCard({ icon, title, description }) {
    return (
        <div
            className="
            bg-white
            rounded-3xl
            border border-green-100
            shadow-md
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
        "
        >

            <div className="mb-6">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-green-700">
                {title}
            </h3>

            <p className="text-gray-500 mt-4 leading-8">
                {description}
            </p>

        </div>
    );
}

export default FeatureCard;