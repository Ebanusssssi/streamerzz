import { useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* left: logo */}
                <img src={logo} alt="logo" width={120} height={24} className="cursor-pointer"/>

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 ">
                    <a href="#works" className="hover:text-neutral-200 transition-colors">
                        How it works
                    </a>
                    <a href="#pricing" className="hover:text-neutral-200 transition-colors">
                        Pricing
                    </a>
                    <a href="#testimonials" className="hover:text-neutral-200 transition-colors">
                        Testimonials
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="hover:text-neutral-200 transition-all">
                        Login
                    </a>
                    <a href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors">
                        Get a Demo
                    </a>
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                        Start Free Trial
                    </a>
                </div>

                {/* Hamburder Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} 
                            className="text-white focus:outline-none" 
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                            { isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900/60 backdrop-blur-md 
                border border-neutral-800 p-4 rounded-xl mt-2">
                    <div className="flex flex-col space-y-4 ">
                        <a href="#works" className="hover:text-neutral-200 transition">
                            Product
                        </a>
                        <a href="#pricing" className="hover:text-neutral-200 transition">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-neutral-200 transition">
                            Resources
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Login
                        </a>
                        <a href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors">
                        Get a Demo
                    </a>
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                        Start Free Trial
                    </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar