"use client"; // Required for onClick events in Next.js App Router
import Link from "next/link";

const Navbar = () => {
  // Function to handle smooth scrolling with offset
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjusts for the fixed header height (h-16 is 64px, so 80px gives breathing room)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full bg-brand-navy text-brand-yellow shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={(e) => handleScroll(e, "home")} 
              className="text-2xl font-bold cursor-pointer"
            >
              VOCO
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-brand-cyan transition cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-brand-cyan transition cursor-pointer"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-brand-cyan transition cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-brand-cyan transition cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;