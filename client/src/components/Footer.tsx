const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-green-700 text-white py-12 lg:pt-24 px-6 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center md:text-left">
        <span className="flex items-end justify-between flex-wrap">
          <h1 className="text-3xl md:text-5xl font-bold">
            Enjoy Delicious Meals <br className="hidden sm:block" />{" "}
            <span className="text-red-500 sm:rotate-12">with</span> Authentic
            Taste
          </h1>
          <button className="mt-8 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600">
            Get Started
          </button>
        </span>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Bite Express</h2>
            <p>
              No matter how your customers want to pay, we can help you find the
              right way.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <img src="/path/to/social1.svg" alt="Social 1" />
              </a>
              <a href="#">
                <img src="/path/to/social2.svg" alt="Social 2" />
              </a>
              <a href="#">
                <img src="/path/to/social3.svg" alt="Social 3" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Menu</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contact</h2>
            <p>8502 Preston Rd. Inglewood, Maine 98380, USA</p>
            <p>Email: info@daisushi.co</p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm">
        © Copyright {date}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
