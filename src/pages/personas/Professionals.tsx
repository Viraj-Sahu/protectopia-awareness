
import PageLayout from "@/components/PageLayout";
import { CreditCard, Shield, AlertTriangle, CheckCircle, Briefcase, Lock, Laptop, ExternalLink, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Professionals = () => {
  return (
    <PageLayout 
      title="Identity Protection for Professionals" 
      subtitle="Secure your business identity and sensitive corporate information."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-security-lightblue h-14 w-14 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="h-7 w-7 text-security-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Meet Rajesh</h2>
                    <p className="text-gray-600">
                      Rajesh is a 42-year-old IT professional who runs a small software consulting business. 
                      He handles sensitive client data, business finances, and communicates with international 
                      clients regularly. His business identity is directly linked to his personal reputation.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-security-blue pl-4 py-3 mb-6">
                  <p className="italic text-gray-600">
                    "I received an email that appeared to be from one of my international clients requesting an urgent 
                    wire transfer to a new bank account. The email looked legitimate, but fortunately, I called my 
                    client directly to verify before making the transfer. It turned out to be a sophisticated 
                    business email compromise attempt."
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Common Threats for Professionals</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Email Compromise (BEC)</p>
                      <p className="text-sm text-gray-600">Attackers hacking or spoofing business email accounts to conduct unauthorized transfers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">GST Fraud</p>
                      <p className="text-sm text-gray-600">Identity thieves using stolen business details to commit tax fraud</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Corporate Identity Theft</p>
                      <p className="text-sm text-gray-600">Criminals impersonating your business to defraud clients or obtain credit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Corporate Account Takeover</p>
                      <p className="text-sm text-gray-600">Unauthorized access to business banking and payment systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-security-lightblue p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Business Identity Theft Impact</h3>
              <ul className="space-y-4">
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">₹42 Lakh</p>
                  <p className="text-gray-600">Average financial loss per business identity theft case</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">63%</p>
                  <p className="text-gray-600">Of small businesses in India reported cyber attacks</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">87%</p>
                  <p className="text-gray-600">Of business email compromise attacks target small businesses</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-blue hover:bg-security-darkblue">
                  Download Business Protection Guide
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Business Identity Protection Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Business Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement multi-factor authentication for all business accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use a business password manager for secure credential storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Set up email signing certificates for important communications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement strict access controls based on job responsibilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Business Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Establish verification protocols for financial transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use dedicated devices for sensitive financial operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement email filtering and malware protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regularly back up all business data using the 3-2-1 method</span>
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
                  <span>Set up alerts for all business banking transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regularly monitor your business credit reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement dual control for large financial transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Consider cyber insurance for your business</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">Business Email Security</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Red Flags in Business Communications:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unexpected changes in payment instructions or bank details</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-pressure tactics or urgency in financial requests</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Slight variations in email domains (e.g., company-inc.com vs company-inc.co)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Requests to keep communications confidential or bypass normal procedures</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Best Practices:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Verify all payment changes via phone using previously established contact numbers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implement DMARC, SPF, and DKIM for your business email domain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Train employees to identify phishing and social engineering attempts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Establish clear processes for verifying and approving financial transactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Protecting Your Business Identity Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Monitor Business Registrations</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regularly check MCA portal for any unauthorized changes to company records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Set up alerts for any filings made with your GST number</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Verify your business appears correctly on government portals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consider registering your business name as a trademark</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Secure Digital Presence</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Register multiple domain variations of your business name</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Verify and maintain your Google Business profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use HTTPS for your business website with proper certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monitor social media for impersonation accounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business-Specific Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://cert-in.org.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">CERT-In (Indian Computer Emergency Response Team)</p>
                  <p className="text-sm text-white/80">Official cybersecurity resources for businesses</p>
                </div>
              </a>
              <a 
                href="https://www.dsci.in/content/cyber-security-resources" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Data Security Council of India</p>
                  <p className="text-sm text-white/80">Resources for business data protection</p>
                </div>
              </a>
              <Link to="/tools/phishing-simulator" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start">
                <Shield className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">BEC Phishing Simulator</p>
                  <p className="text-sm text-white/80">Test your team's ability to identify business email compromise</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Professionals;
