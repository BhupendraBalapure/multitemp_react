
function Footer() {
    return (
        <>
            <footer>
                <div className="max-w-7xl mx-auto px-4 py-10">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Logo / About */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-3">YourBrand</h2>
                            <p className="text-sm">
                                We build modern web applications with React & Laravel.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/" className="hover:text-white">Home</a></li>
                                <li><a href="/about" className="hover:text-white">About</a></li>
                                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                            <div className="flex gap-4 text-sm">
                                <a href="#" className="hover:text-white">Facebook</a>
                                <a href="#" className="hover:text-white">Instagram</a>
                                <a href="#" className="hover:text-white">LinkedIn</a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
                        © {new Date().getFullYear()} YourBrand. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer