
import { useState } from "react"
import { Link } from "react-router-dom"



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white-800 text-black-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold">Bhupendra</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm">
            {/* <li><a href="/" className="hover:text-black-300">Home</a></li> */}
            {/* <li><a href="/about" className="hover:text-black-300">About</a></li> */}
            {/* <li><a href="/contact" className="hover:text-black-300">Contact</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Link to="/login" className="hover:text-black-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-black-300">
              Register
            </Link>
          </div>


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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar