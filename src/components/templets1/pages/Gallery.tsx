
function Gallery() {

    const galleryImages = [
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
        // "https://images.unsplash.com/photo-1580281657527-47f249e6f4df",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
    ]


    return (
        <>
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
                       {galleryImages.map((item,index) =>(
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
        </>
    )
}

export default Gallery;