import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


function Hero() {

    const slider = [
        {
            title: "Welcome to Your Website 🚀",
            description: "Build modern apps with React & Tailwind",
            bg: "https://images.unsplash.com/photo-1699891730676-037bed3c1bed?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Fast & Responsive ⚡",
            description: "Fully optimized for performance",
            bg: "https://images.unsplash.com/photo-1710162734135-8dc148f53abe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Start Now 💻",
            description: "Create real projects",
            bg: "https://images.unsplash.com/photo-1583364486567-ce2e045676e9?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

    ];
    return (
        <>

            <section>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[80vh] flex flex-col justify-center items-center text-center text-white"
                                style={{
                                    backgroundImage: `url(${item.bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold">
                                    {item.title}
                                </h1>
                                <p className="mt-4">{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

        </>
    )
}


export default Hero;