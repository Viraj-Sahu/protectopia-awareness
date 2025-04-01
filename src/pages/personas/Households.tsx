
import PageLayout from "@/components/PageLayout";
import { Home, Shield, AlertTriangle, CheckCircle, Smartphone, Wifi, Users, ExternalLink, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Households = () => {
  return (
    <PageLayout 
      title="Identity Protection for Households" 
      subtitle="Safeguard your family's personal information from identity thieves."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-security-lightblue h-14 w-14 rounded-full flex items-center justify-center mr-4">
                    <Home className="h-7 w-7 text-security-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Meet Kamala</h2>
                    <p className="text-gray-600">
                      Kamala is a 34-year-old homemaker managing a household of five, including her elderly parents. 
                      She handles most of the family's financial accounts, government documents, and coordinates 
                      healthcare for everyone in the family.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-security-blue pl-4 py-3 mb-6">
                  <p className="italic text-gray-600">
                    "I received a call claiming to be from our gas company saying our bill was overdue. They knew our names 
                    and address, so I paid through the link they sent. Later, I discovered it was a scam when unauthorized 
                    transactions appeared in our bank account."
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Common Threats for Households</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Utility and Service Provider Scams</p>
                      <p className="text-sm text-gray-600">Fake representatives claiming issues with electricity, gas, or internet services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Government Impersonation</p>
                      <p className="text-sm text-gray-600">Fraudsters claiming to be from tax authorities, Aadhaar office, or other agencies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Home WiFi Network Breaches</p>
                      <p className="text-sm text-gray-600">Hackers accessing unsecured home networks to steal personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Family Member Impersonation</p>
                      <p className="text-sm text-gray-600">Scammers pretending to be relatives in emergency situations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-security-lightblue p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Household Identity Theft Facts</h3>
              <ul className="space-y-4">
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">78%</p>
                  <p className="text-gray-600">Of household identity theft cases affect multiple family members</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">₹32,000</p>
                  <p className="text-gray-600">Average financial loss per household from identity theft</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">53%</p>
                  <p className="text-gray-600">Of cases involve compromised document information (Aadhaar, PAN, etc.)</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-blue hover:bg-security-darkblue">
                  Download Family Protection Guide
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Family Protection Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Family Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Store important documents in a secure location, ideally a fireproof safe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Create digital backups of documents with password protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Shred documents with personal information before disposal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keep a record of all important document numbers (PAN, Aadhaar, etc.)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Network Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Change default router passwords and usernames</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use WPA3 encryption for your WiFi network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Create a guest network for visitors and IoT devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regularly update router firmware</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Education</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Establish a code word for family emergency verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Teach children about online privacy and information sharing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Create clear guidelines for what information can be shared online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Educate elderly family members about common phone scams</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">Managing Family Accounts and Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Avoid These Common Mistakes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Using the same password for multiple family accounts</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sharing OTPs or banking credentials over the phone</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Clicking on links in messages claiming to be from service providers</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Allowing children to use accounts with payment methods saved</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Best Practices:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use a family password manager to secure all accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Set up a family calendar for bill payments to avoid scams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regularly review all account statements as a family</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create separate user accounts for each family member on shared devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Protecting Vulnerable Family Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Children</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use parental controls on devices and internet access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monitor children's online activities and social media accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Teach them about the dangers of sharing personal information online</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consider freezing their credit until they're adults</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Elderly Family Members</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Set up secure, simple authentication methods for their accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Install caller ID and call blocking apps on their phones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regularly review their accounts for suspicious activity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create a policy that they verify any financial requests with another family member</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Household-Specific Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/tools/caller-verify" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start">
                <Smartphone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Caller Verification Tool</p>
                  <p className="text-sm text-white/80">Check if a phone number has been reported for scams</p>
                </div>
              </Link>
              <a 
                href="https://www.meity.gov.in/content/awareness-programme-cyber-security" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Family Cyber Security Programs</p>
                  <p className="text-sm text-white/80">Government-sponsored training for families</p>
                </div>
              </a>
              <Link to="/tools/credit-check" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start">
                <Smartphone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Family Credit Monitoring</p>
                  <p className="text-sm text-white/80">Check credit reports for all family members</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Households;
