
import { Shield, AlertTriangle, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScamCard from "@/components/ScamCard";
import { Mail, Phone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <PageLayout 
      title="Learn About Digital Identity Threats" 
      subtitle="Stay informed about the latest tactics cybercriminals use to steal your personal information."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-security-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Why Identity Protection Matters</h3>
              <p className="text-gray-600">
                Your digital identity is the gateway to your financial, personal, and professional life. 
                Protecting it is more important than ever in today's connected world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AlertTriangle className="h-12 w-12 text-security-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">The Cost of Identity Theft</h3>
              <p className="text-gray-600">
                Indians lost over ₹250 crore to scams in 2023 alone. Beyond financial loss, victims face 
                damaged credit scores and emotional distress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Search className="h-12 w-12 text-security-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge is Protection</h3>
              <p className="text-gray-600">
                Understanding common scams and implementing simple security measures can reduce your 
                risk of identity theft by over 80%.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">Common Scams to Watch Out For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScamCard 
              title="Phishing Attacks"
              description="Deceptive emails and messages designed to steal your personal information."
              icon={<Mail className="h-6 w-6 text-security-blue" />}
              link="/learn/phishing"
              color="border-security-blue"
            />
            <ScamCard 
              title="SIM Swap Fraud"
              description="Criminals take over your phone number to access your accounts."
              icon={<Phone className="h-6 w-6 text-security-red" />}
              link="/learn/sim-swap"
              color="border-security-red"
            />
            <ScamCard 
              title="Deepfake Scams"
              description="AI-generated content used to impersonate you or your loved ones."
              icon={<Shield className="h-6 w-6 text-security-yellow" />}
              link="/learn/deepfake"
              color="border-security-yellow"
            />
            <ScamCard 
              title="PAN Card Misuse"
              description="Identity thieves using your PAN details for financial fraud."
              icon={<CreditCard className="h-6 w-6 text-security-green" />}
              link="/learn/pan-misuse"
              color="border-security-green"
            />
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Not Sure Where to Start?</h3>
            <p className="text-center text-lg mb-6">
              We've created personalized guidance based on your situation. Find the resources most relevant to you.
            </p>
            <div className="flex justify-center">
              <Button className="bg-security-blue hover:bg-security-darkblue" size="lg" asChild>
                <Link to="/personas">Find Your Personalized Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Learn;
