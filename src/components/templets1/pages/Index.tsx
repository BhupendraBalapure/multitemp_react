import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";




function Index() {

    const aboutData = {
        title: "About Us",
        heading: "We build modern digital solutions",
        description:
            // "We help businesses grow using React, Laravel, and modern technologies.",
            `MS Orthopaedics | Arthroscopy, Sports Injury, Knee & Shoulder Surgeon
             Dr. Sahil is a fellowship-trained orthopaedic surgeon known for precision-driven arthroscopic and shoulder surgery. With a strong academic foundation and advanced surgical training, he specializes in restoring joint stability, function, and performance.
             He completed his MS in Orthopaedics from the prestigious Jawaharlal Nehru Medical College, Belgaum, one of the country's respected medical institutions, where he developed expertise in trauma management and complex joint disorders.
             He subsequently pursued Fellowship Training in Arthroscopy, Sports Injury & Joint Preservation (Knee Surgery) in Mumbai, followed by a dedicated Fellowship in Advanced Shoulder Surgery.`,

        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    };

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
    const galleryImages = [
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
        // "https://images.unsplash.com/photo-1580281657527-47f249e6f4df",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
    ];
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
            <Navbar />
            <Hero />
            {/* <About /> */}

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center mb-10">
                        {aboutData.title}
                    </h2>

                    {/* Row */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left - Text */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                {aboutData.heading}
                            </h3>
                            <p className="text-gray-600">
                                {aboutData.description}
                            </p>
                        </div>

                        {/* Right - Image */}
                        <div>
                            <img
                                src={aboutData.image}
                                alt="about"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* end about */}



            {/* <Specializations /> */}

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


            {/* <Service /> */}

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
                                    <img src={item.image} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt={item.title} />
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
            {/* <Gallery /> */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-center text-black-700">
                        Gallery
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Our clinic moments & treatments
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {galleryImages.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={item}
                                    alt={`gallery-${index}`}
                                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* <Testimonials /> */}
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
                        {testimonials.map((item, index) => (
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
            <Footer />
        </>
    )
}

export default Index