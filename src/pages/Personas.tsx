
import PageLayout from "@/components/PageLayout";
import PersonaCard from "@/components/PersonaCard";
import { Mail, Shield, CreditCard, Phone } from "lucide-react";

const Personas = () => {
  return (
    <PageLayout 
      title="Solutions Tailored for You" 
      subtitle="Find personalized guidance based on your situation and needs."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <PersonaCard 
              name="For Students"
              description="Protect your digital identity as you navigate online education and social media."
              icon={<Mail className="h-8 w-8" />}
              link="/personas/students"
            />
            <PersonaCard 
              name="For Households"
              description="Safeguard your family's personal information from identity thieves."
              icon={<Shield className="h-8 w-8" />}
              link="/personas/households"
            />
            <PersonaCard 
              name="For Professionals"
              description="Secure your business identity and sensitive corporate information."
              icon={<CreditCard className="h-8 w-8" />}
              link="/personas/professionals"
            />
            <PersonaCard 
              name="For Seniors"
              description="Simple strategies to protect yourself from targeted scams."
              icon={<Phone className="h-8 w-8" />}
              link="/personas/seniors"
            />
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Different Approaches?</h3>
            <p className="text-lg mb-6">
              Cybercriminals often target different demographics with specific scam tactics. We've created 
              personalized guidance based on common vulnerability patterns across different age groups and lifestyles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Students</h4>
                <p className="text-gray-600">
                  Face risks from educational data breaches, accommodation scams, and social media hacking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Households</h4>
                <p className="text-gray-600">
                  Deal with threats targeting multiple family members, shared accounts, and home network security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Professionals</h4>
                <p className="text-gray-600">
                  Navigate risks to their business identity, client information, and professional networks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Seniors</h4>
                <p className="text-gray-600">
                  Often targeted by phone scams, impersonation fraud, and pension/investment schemes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Personas;
