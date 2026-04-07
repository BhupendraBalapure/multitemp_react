
function Service() {

    const Services = [

        {
            title: "Arthroscopy Surgery",
            description: "Minimally invasive joint surgery for faster recovery.",
            image: "https://as1.ftcdn.net/jpg/09/91/58/78/1000_F_991587840_sVic67uOcXE5PLHvHWpxROmzQFI2B5kE.jpg"
        },
        {
            title: "Sports Injury Treatment",
            description: "Advanced care for ligament and muscle injuries.",
            image: "https://c8.alamy.com/comp/2H5933N/hospital-building-for-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-2H5933N.jpg"
        },
        {
            title: "Joint Replacement",
            description: "Knee, hip, and shoulder replacement with precision.",
            image: "https://as1.ftcdn.net/jpg/09/91/58/78/1000_F_991587840_sVic67uOcXE5PLHvHWpxROmzQFI2B5kE.jpg"
        },
        {
            title: "Physiotherapy",
            description: "Rehabilitation programs for quick recovery.",
            image: "https://as1.ftcdn.net/jpg/09/91/58/78/1000_F_991587840_sVic67uOcXE5PLHvHWpxROmzQFI2B5kE.jpg"
        },

    ];
    return (
        <>
            {/* <h1>Our Services</h1> */}

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center text-black-700">
                        Our Services
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Comprehensive orthopaedic services tailored for you
                    </p>

                    {/* card */}
                    <div className="grid md:grid-cols-4 gap-6 mt-10">
                        {Services.map((item, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition">
                                <div className="text-4xl mb-3">
                                <img src={item.image} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt={item.title}/>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;