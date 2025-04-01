
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyBanner = () => {
  return (
    <div className="bg-security-red text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <AlertCircle className="h-5 w-5 animate-pulse-alert" />
            <span className="font-medium">Been scammed? Act quickly to minimize damage!</span>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-security-red"
            >
              Call 1930
            </Button>
            <Button 
              className="bg-white text-security-red hover:bg-gray-100"
              asChild
            >
              <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
                Report Online
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
