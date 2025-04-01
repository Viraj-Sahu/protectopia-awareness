
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-security-blue" />
              <span className="text-lg font-bold text-security-darkblue">ProtectoPia</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Empowering Indians to protect their identity and stay safe online.
            </p>
            <p className="text-sm text-gray-500">
              © 2023 ProtectoPia. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-security-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-security-blue">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-security-blue">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-security-blue">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Official Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://cybercrime.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-security-blue"
                >
                  National Cyber Crime Portal
                </a>
              </li>
              <li>
                <a 
                  href="https://www.rbi.org.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-security-blue"
                >
                  Reserve Bank of India
                </a>
              </li>
              <li>
                <a 
                  href="https://www.india.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-security-blue"
                >
                  Government of India
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Emergency Contact</h3>
            <p className="text-sm text-gray-600 mb-2">
              National Cybercrime Helpline:
            </p>
            <p className="text-lg font-bold text-security-blue mb-4">1930</p>
            <p className="text-sm text-gray-600 mb-2">
              Report Online:
            </p>
            <a 
              href="https://cybercrime.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-security-blue hover:underline"
            >
              cybercrime.gov.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
