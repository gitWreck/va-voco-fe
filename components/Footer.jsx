const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">VOCO</h3>
          <p className="text-gray-400">
            Professional support services for businesses of all sizes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400">4030 Los Baños, Laguna, Philippines</p>
          <p className="text-gray-400">+1 555 123 4567</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-800">
        &copy; 2025 VOCO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;