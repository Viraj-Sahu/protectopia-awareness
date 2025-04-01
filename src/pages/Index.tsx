
import { Shield, AlertTriangle, Search, CreditCard, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import StatCard from "@/components/StatCard";
import ScamCard from "@/components/ScamCard";
import PersonaCard from "@/components/PersonaCard";
import ToolCard from "@/components/ToolCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-security-lightblue via-white to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Protect Your Identity from Digital Threats
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Over <span className="font-semibold">27% of Indians</span> face identity theft. Learn how to safeguard your personal information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-security-blue hover:bg-security-darkblue text-lg" size="lg" asChild>
                    <Link to="/learn">Learn How to Protect Yourself</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-security-blue text-security-blue hover:bg-security-lightblue" asChild>
                    <Link to="/tools">Explore Our Tools</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-security-blue rounded-full opacity-10 blur-lg"></div>
                  <Shield className="h-64 w-64 text-security-blue" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Growing Threat in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard 
                number="₹250+ Crore"
                label="Lost to scams in 2023"
                icon={<CreditCard className="h-10 w-10" />}
              />
              <StatCard 
                number="27%"
                label="Of Indians face identity theft"
                icon={<AlertTriangle className="h-10 w-10" />}
              />
              <StatCard 
                number="32%"
                label="Increase in cyber crimes since 2022"
                icon={<Search className="h-10 w-10" />}
              />
            </div>
          </div>
        </section>
        
        {/* Common Scams Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Scams to Watch Out For</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest tactics cybercriminals use to steal your personal information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-security-blue text-security-blue hover:bg-security-lightblue" asChild>
                <Link to="/learn" className="flex items-center">
                  View All Threats
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Personas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solutions Tailored for You</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find personalized guidance based on your situation and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-16 bg-security-lightblue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Protection Tools</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our free tools to strengthen your digital security and verify potential threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-security-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Feeling Scammed? You're Not Alone.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you believe you've been a victim of identity theft, act quickly to minimize the damage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-security-blue hover:bg-gray-100" size="lg">
                Call 1930 Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-security-darkblue" size="lg" asChild>
                <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">
                  Report Online
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
