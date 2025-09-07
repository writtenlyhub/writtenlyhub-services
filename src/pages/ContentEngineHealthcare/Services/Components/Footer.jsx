const Footer = () => {
  return (
    <footer className="font-montserrat w-full bg-[#022150]  border-t py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <p className="text-white text-sm md:text-base mb-2 md:mb-0">
          © {new Date().getFullYear()} WrittenlyHub Pvt. Ltd. All rights reserved.
        </p>

        {/* Right side - Links */}
        <div className="flex space-x-4">
          <a href="https://www.writtenlyhub.com/privacy-policy/" target="_blank" className="text-white hover:text-orange-500 text-sm md:text-base transition">
            Privacy Policy
          </a>
          {/* <span className="text-white">|</span>
          <a href="#" target="_blank" className="text-white hover:text-orange-500 text-sm md:text-base transition">
            Policy
          </a> */}
          <span className="text-white">|</span>
          <a href="https://www.writtenlyhub.com/terms/" target="_blank" className="text-white hover:text-orange-500 text-sm md:text-base transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;