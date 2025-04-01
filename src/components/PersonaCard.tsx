
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PersonaCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const PersonaCard = ({ name, description, icon, link }: PersonaCardProps) => {
  return (
    <div className="security-card flex flex-col items-center text-center">
      <div className="mb-4 h-16 w-16 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="w-full">
        <Link to={link}>View Solutions</Link>
      </Button>
    </div>
  );
};

export default PersonaCard;
