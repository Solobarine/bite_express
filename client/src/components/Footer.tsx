const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="text-lg font-semibold">BiteXpress</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 text-center">
            <a
              href="/about"
              className="text-sm text-gray-400 hover:text-white mx-2"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-400 hover:text-white mx-2"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white mx-2"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-white mx-2"
            >
              Terms of Service
            </a>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 text-center">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
