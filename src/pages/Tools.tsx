
import PageLayout from "@/components/PageLayout";
import ToolCard from "@/components/ToolCard";
import { CreditCard, Phone, Mail, Shield, ExternalLink } from "lucide-react";

const Tools = () => {
  return (
    <PageLayout 
      title="Interactive Protection Tools" 
      subtitle="Use our free tools to strengthen your digital security and verify potential threats."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ToolCard 
              title="Credit Score Checker"
              description="Monitor your credit score for signs of identity theft and unauthorized accounts."
              icon={<CreditCard className="h-6 w-6" />}
              link="/tools/credit-check"
              buttonText="Check Your Score"
            />
            <ToolCard 
              title="Caller Verification"
              description="Verify if a phone number has been reported for scam or fraud activities."
              icon={<Phone className="h-6 w-6" />}
              link="/tools/caller-verify"
              buttonText="Verify a Number"
            />
            <ToolCard 
              title="Phishing Simulator"
              description="Test your ability to identify phishing emails with our interactive quiz."
              icon={<Mail className="h-6 w-6" />}
              link="/tools/phishing-simulator"
              buttonText="Take the Quiz"
            />
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">Official Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-security-blue mr-4" />
                <h3 className="text-xl font-bold">National Cyber Crime Portal</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Report cybercrimes online through the official government portal. Available in multiple Indian languages.
              </p>
              <a 
                href="https://cybercrime.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-security-blue hover:underline flex items-center"
              >
                Visit Cyber Crime Portal <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Phone className="h-10 w-10 text-security-red mr-4" />
                <h3 className="text-xl font-bold">National Cybercrime Helpline</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Call the toll-free helpline to report cyber fraud and get immediate assistance to freeze fraudulent transactions.
              </p>
              <p className="text-2xl font-bold text-security-red">1930</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tools;
