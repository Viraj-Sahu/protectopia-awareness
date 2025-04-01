
import PageLayout from "@/components/PageLayout";
import { Phone, AlertTriangle, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SimSwap = () => {
  return (
    <PageLayout 
      title="SIM Swap Fraud" 
      subtitle="Learn how criminals take over your phone number to access your accounts and how to prevent it."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">What is SIM Swap Fraud?</h2>
              <p className="text-lg mb-6">
                SIM swap fraud is when criminals take control of your phone number by transferring it to a 
                SIM card they possess. Once they control your number, they can receive your calls, SMS messages, 
                and OTPs for banking and other accounts.
              </p>
              
              <div className="bg-security-lightblue p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-security-red" />
                  Warning Signs of SIM Swap
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sudden loss of mobile network service</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unable to make or receive calls or messages</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notifications about account changes you didn't make</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unauthorized transactions in your banking apps</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Emails about password changes you didn't request</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4">How SIM Swap Scams Work in India</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-security-blue pl-4 py-2">
                  <p className="font-medium">1. Information Gathering</p>
                  <p className="text-gray-600">
                    Scammers collect your personal information through phishing, data breaches, or social media.
                  </p>
                </div>
                <div className="border-l-4 border-security-blue pl-4 py-2">
                  <p className="font-medium">2. Telecom Provider Contact</p>
                  <p className="text-gray-600">
                    They contact your mobile service provider pretending to be you, claiming to have lost or damaged their SIM.
                  </p>
                </div>
                <div className="border-l-4 border-security-blue pl-4 py-2">
                  <p className="font-medium">3. Identity Verification Bypass</p>
                  <p className="text-gray-600">
                    They use your personal information to answer security questions and request a SIM replacement.
                  </p>
                </div>
                <div className="border-l-4 border-security-blue pl-4 py-2">
                  <p className="font-medium">4. Account Access</p>
                  <p className="text-gray-600">
                    Once they have control of your number, they reset passwords to your banking and payment apps using SMS verification.
                  </p>
                </div>
                <div className="border-l-4 border-security-blue pl-4 py-2">
                  <p className="font-medium">5. Financial Theft</p>
                  <p className="text-gray-600">
                    They transfer money, take loans, or make purchases in your name.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <Phone className="h-12 w-12 text-security-red mb-4" />
              <h3 className="text-xl font-bold mb-4">Notable SIM Swap Cases</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Doctor Loses ₹1.8 Crore</h4>
                  <p className="text-gray-600 mb-2">
                    In 2023, a Bengaluru doctor lost ₹1.8 crore when scammers took control of his phone number and accessed his bank accounts.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">Mumbai Businessman Scammed</h4>
                  <p className="text-gray-600 mb-2">
                    A Mumbai business owner had ₹70 lakh stolen from business accounts after a SIM swap.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">IT Professional in Delhi</h4>
                  <p className="text-gray-600 mb-2">
                    Scammers obtained a duplicate SIM by providing fake ID proof and stole ₹25 lakh within hours.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-security-red hover:bg-red-700" asChild>
                  <Link to="/tools/caller-verify">Verify Suspicious Calls</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">How to Protect Yourself from SIM Swap Fraud</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Set a SIM PIN</p>
                    <p className="text-sm text-gray-600">Enable SIM card PIN protection on your phone</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Add Porting/SIM Change Password</p>
                    <p className="text-sm text-gray-600">Contact your telecom provider to set up additional verification for SIM changes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Use App-Based Authentication</p>
                    <p className="text-sm text-gray-600">Switch to authenticator apps instead of SMS for 2FA</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Limit Personal Information Online</p>
                    <p className="text-sm text-gray-600">Be careful about what you share on social media</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Use Different Security Questions</p>
                    <p className="text-sm text-gray-600">Don't use easily guessable answers for security questions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Monitor Account Activity</p>
                    <p className="text-sm text-gray-600">Set up alerts for bank transactions and account changes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Telecom Provider Contact Information</h3>
            <p className="mb-6">
              If you suspect a SIM swap attack, contact your telecom provider immediately:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-bold text-lg mb-1">Jio</p>
                <p className="text-security-red font-bold">199</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-bold text-lg mb-1">Airtel</p>
                <p className="text-security-red font-bold">121</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-bold text-lg mb-1">Vi (Vodafone Idea)</p>
                <p className="text-security-red font-bold">199</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-bold text-lg mb-1">BSNL</p>
                <p className="text-security-red font-bold">1800-180-1503</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Been a Victim of SIM Swap Fraud?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              If you've experienced a SIM swap attack, take these steps immediately:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold">1. Contact Your Mobile Operator</p>
                <p className="text-sm text-gray-600">To block your compromised SIM immediately</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold">2. Call Your Bank</p>
                <p className="text-sm text-gray-600">To freeze your accounts and report fraud</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold">3. File a Police Report</p>
                <p className="text-sm text-gray-600">At your local police station or online</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-security-red hover:bg-red-700" size="lg">
                Call 1930 Now
              </Button>
              <Button variant="outline" className="border-security-blue text-security-blue" size="lg" asChild>
                <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Report Online <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SimSwap;
