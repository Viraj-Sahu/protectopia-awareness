
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ScamCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  color: string;
}

const ScamCard = ({ title, description, icon, link, color }: ScamCardProps) => {
  return (
    <div className={`security-card border-l-4 ${color}`}>
      <div className="flex items-center space-x-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="ghost" asChild className="group p-0">
        <Link to={link} className="flex items-center text-security-blue hover:text-security-darkblue">
          Learn more
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export default ScamCard;
