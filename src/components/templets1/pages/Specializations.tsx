

function Specializations() {

    const data = [
        {
            title: "Knee Treatment",
            description:
                "ACL/PCL reconstruction, meniscus repair, cartilage restoration, knee replacement, and joint preservation surgery.",
            image:
                "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
        },
        {
            title: "Shoulder Treatment",
            description:
                "Rotator cuff repair, shoulder stabilization, labral repair, AC joint treatment, and shoulder replacement.",
            image:
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
        },
        {
            title: "Hip Treatment",
            description:
                "Hip arthroscopy for labral tears & impingement, total and partial hip replacement surgery.",
            image:
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
        },

        {
            title: "Back Bone Treatment",
            description:
                "Hip arthroscopy for labral tears & impingement, total and partial hip replacement surgery.",
            image:
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
        },
    ];

    return (
        <>
            <section className="py-16 bg-white-100">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-black-700">
                        Our Specializations
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Comprehensive orthopaedic care for every joint
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">

                        {data.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-48 w-full object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {item.description}
                                    </p>

                                    <button className="text-teal-600 font-medium hover:underline">
                                        View Treatments →
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Specializations;