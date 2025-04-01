
import PageLayout from "@/components/PageLayout";
import { Mail, Shield, AlertTriangle, CheckCircle, Smartphone, Book, CreditCard, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <PageLayout 
      title="Identity Protection for Students" 
      subtitle="Protect your digital identity as you navigate online education and social media."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-security-lightblue h-14 w-14 rounded-full flex items-center justify-center mr-4">
                    <Book className="h-7 w-7 text-security-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Meet Aman</h2>
                    <p className="text-gray-600">
                      Aman is a 20-year-old engineering student who spends much of his time online for classes, 
                      research, and connecting with friends. Like many students, Aman shares personal information 
                      across multiple platforms and uses public Wi-Fi networks frequently.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-security-blue pl-4 py-3 mb-6">
                  <p className="italic text-gray-600">
                    "I received an email that looked like it was from my university, asking me to log in and update 
                    my scholarship details. After entering my credentials, I realized it was a fake site. Within 
                    hours, my email was sending spam to all my contacts."
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Common Threats for Students</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Educational Portal Phishing</p>
                      <p className="text-sm text-gray-600">Fake emails impersonating your university to steal login credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Scholarship and Financial Aid Scams</p>
                      <p className="text-sm text-gray-600">Fraudulent opportunities requiring application fees or bank details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Public Wi-Fi Hacking</p>
                      <p className="text-sm text-gray-600">Data interception on unsecured campus and café networks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Accommodation Scams</p>
                      <p className="text-sm text-gray-600">Fake rental listings requiring deposits for non-existent properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-security-lightblue p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Student Identity Theft Stats</h3>
              <ul className="space-y-4">
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">62%</p>
                  <p className="text-gray-600">Of students reported unauthorized access to their online accounts</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">₹14,500</p>
                  <p className="text-gray-600">Average financial loss per student identity theft victim</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">43%</p>
                  <p className="text-gray-600">Of identity theft cases involving students began with social media</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-blue hover:bg-security-darkblue">
                  Download Student Safety Guide
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Protection Strategies for Students</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Your Devices</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use strong, unique passwords for different accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enable two-factor authentication on all accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Install and regularly update antivirus software</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use a password manager to generate and store secure passwords</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Browsing Habits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use a VPN when connecting to public Wi-Fi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verify email senders and website URLs before clicking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Look for HTTPS in the browser address bar before entering data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Log out of accounts when using shared computers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monitor your bank accounts and statements regularly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Set up alerts for transactions above a certain amount</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Research scholarship opportunities through official channels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Never pay fees to apply for scholarships or financial aid</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">Social Media Safety for Students</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">What Not to Share:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Student ID numbers or university login details</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home address or accommodation details</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Phone number or personal email publicly</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel plans indicating when you'll be away</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Best Practices:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Review and update privacy settings regularly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Be cautious of friend/connection requests from strangers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Disable location services for social media apps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Think twice before participating in online quizzes or games that collect personal data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Student-Specific Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://www.ugc.ac.in/cyber-security/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">UGC Cyber Security Guidelines</p>
                  <p className="text-sm text-white/80">Resources specifically for higher education students</p>
                </div>
              </a>
              <a 
                href="https://www.mygov.in/task/cyber-swachhta-kendra-cyber-hygiene-portal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Cyber Swachhta Kendra</p>
                  <p className="text-sm text-white/80">Free tools to secure your devices and information</p>
                </div>
              </a>
              <Link to="/tools/phishing-simulator" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phishing Awareness Quiz</p>
                  <p className="text-sm text-white/80">Test your ability to spot educational phishing attempts</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Students;
