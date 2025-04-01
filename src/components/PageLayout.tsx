
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Header />
      
      <main className="flex-grow">
        {(title || subtitle) && (
          <div className="bg-security-lightblue py-12">
            <div className="container mx-auto px-4 text-center">
              {title && <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>}
              {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
            </div>
          </div>
        )}
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
