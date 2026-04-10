
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {

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

    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    );
}

export default About;