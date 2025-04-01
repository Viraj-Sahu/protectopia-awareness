
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  buttonText: string;
}

const ToolCard = ({ title, description, icon, link, buttonText }: ToolCardProps) => {
  return (
    <div className="security-card">
      <div className="flex items-center space-x-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild className="w-full">
        <Link to={link}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default ToolCard;
