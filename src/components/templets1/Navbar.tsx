

import { useState } from "react"



function Navbar() {

    const [isOpen , setIsOpen] = useState(false);
    return (
        <>
        <nav className="bg-white-800 text-black-800">
         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Bhupendra</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="/" className="hover:text-black-300">Home</a></li>
          <li><a href="/about" className="hover:text-black-300">About</a></li>
          <li><a href="/contact" className="hover:text-black-300">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="/" className="block">Home</a></li>
            <li><a href="/about" className="block">About</a></li>
            <li><a href="/contact" className="block">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
        </>
    )
}

export default Navbar