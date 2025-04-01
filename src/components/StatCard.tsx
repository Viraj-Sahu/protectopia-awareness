
import { ReactNode } from "react";

interface StatCardProps {
  number: string;
  label: string;
  icon: ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="security-card flex flex-col items-center text-center">
      <div className="mb-4 text-security-blue">{icon}</div>
      <p className="stat-number mb-2">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
