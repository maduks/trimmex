import { Leaf } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">Trimmex</span>
            </div>
            <p className="mb-4">
              Experience the power of natural weight loss with Trimmex Green
              Coffee.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.38 5.43 4.109 4.109 0 01-1.852-.518 4.103 4.103 0 003.419 2.896 8.221 8.221 0 01-5.32 1.824 11.646 11.646 0 01-2.124-.062 4.105 4.105 0 003.831 2.834A8.23 8.23 0 011.001 18.495a11.643 11.643 0 006.29 1.756z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 3.55 2.299 6.547 5.47 7.59V16.5c0-.384.281-.692.64-.692h.719c.359 0 .64.308.64.692v3.09c0 .384-.281.692-.64.692h-.719A9.926 9.926 0 002 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.707 8.293a1 1 0 00-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="transition hover:text-green-500">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-green-500">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-green-500"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition hover:text-green-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-green-500">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-green-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-green-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <p className="mb-2">Phone: +234 706 201 0063</p>
            <p className="mb-2">Email: trimmexgreencoffee@gmail.com</p>
            <p>Address: Abuja, Nigeria</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 Trimmex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
