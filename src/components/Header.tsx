
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Bell, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-security-blue" />
            <span className="text-xl font-bold text-security-darkblue">ProtectoPia</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/learn" className="text-gray-700 hover:text-security-blue font-medium">
                Learn
              </Link>
              <Link to="/tools" className="text-gray-700 hover:text-security-blue font-medium">
                Tools
              </Link>
              <Link to="/personas" className="text-gray-700 hover:text-security-blue font-medium">
                For You
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-security-blue font-medium">
                Resources
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button className="bg-security-blue hover:bg-security-darkblue">
                Report a Scam
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/learn" className="text-gray-700 hover:text-security-blue font-medium">
                Learn
              </Link>
              <Link to="/tools" className="text-gray-700 hover:text-security-blue font-medium">
                Tools
              </Link>
              <Link to="/personas" className="text-gray-700 hover:text-security-blue font-medium">
                For You
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-security-blue font-medium">
                Resources
              </Link>
              <Button className="bg-security-blue hover:bg-security-darkblue w-full">
                Report a Scam
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
