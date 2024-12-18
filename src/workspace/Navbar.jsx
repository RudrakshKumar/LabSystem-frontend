import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-3 mb-1 shadow-md ">
      <div className="max-w-full mx-auto flex justify-between items-center w-full">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-2">
          <img src="https://neetcode.io/assets/neetcode-io-logo.png" alt="Logo" className=" ml-4 h-8 w-8" />
          <div className="text-white text-lg font-semibold">
            Lab Systems - Your Coding Environment
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="space-y-4 p-4">
          {/* Empty Mobile Menu */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
