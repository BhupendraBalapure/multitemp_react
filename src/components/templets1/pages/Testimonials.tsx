function Testimonials() {

    const testimonials = [
        {
            name: "Rahul Sharma",
            feedback:
                "Excellent treatment! Doctor explained everything clearly and recovery was very fast.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Priya Verma",
            feedback:
                "Very professional and caring approach. Highly recommended for knee surgery.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Amit Patel",
            feedback:
                "Best orthopaedic experience. Staff and doctor both are very supportive.",
            image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
    ]
    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center text-black-700">
                         Testimonials
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        What our patients say about us
                    </p>
                    {/* card */}
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        {testimonials.map((item,index) =>(
                            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <p className="text-gray-600 text-sm mb-4">
                                    "{item.feedback}"
                                </p>
                                <img src={item.image} alt={item.name} className="rounded-full mx-auto" />
                                <h4 className="font-semibold">{item.name}</h4>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}
export default Testimonials;