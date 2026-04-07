import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import About from "./About";
import Specializations from "./Specializations";
import Service from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";


function Index() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Specializations />
            <Service />
            <Gallery />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Index