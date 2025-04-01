
import PageLayout from "@/components/PageLayout";
import { Mail, AlertTriangle, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Phishing = () => {
  return (
    <PageLayout 
      title="Phishing Attacks" 
      subtitle="Learn how to identify and protect yourself from deceptive emails and messages."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">What is Phishing?</h2>
              <p className="text-lg mb-6">
                Phishing is a type of cyber attack where criminals pose as legitimate institutions to trick 
                you into revealing sensitive information such as passwords, banking details, or personal data.
              </p>
              
              <div className="bg-security-lightblue p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-security-red" />
                  Warning Signs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Urgent requests for personal information</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Suspicious or misspelled email addresses</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Poor grammar or unusual language</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Threats or extreme urgency in the message</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Links that don't match legitimate URLs</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Types of Phishing Attacks in India</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-security-blue pl-4">
                  <h4 className="font-bold mb-2">Bank Impersonation</h4>
                  <p className="text-gray-600">
                    Fraudsters pose as SBI, HDFC, ICICI, or other banks claiming issues with your account 
                    that require immediate verification of details.
                  </p>
                </div>
                <div className="border-l-4 border-security-red pl-4">
                  <h4 className="font-bold mb-2">KYC Scams</h4>
                  <p className="text-gray-600">
                    Messages claiming your KYC needs updating for your bank account, UPI, or mobile wallet.
                  </p>
                </div>
                <div className="border-l-4 border-security-yellow pl-4">
                  <h4 className="font-bold mb-2">Income Tax Refund Fraud</h4>
                  <p className="text-gray-600">
                    Emails claiming you're eligible for a tax refund and need to submit your details.
                  </p>
                </div>
                <div className="border-l-4 border-security-green pl-4">
                  <h4 className="font-bold mb-2">Job Offer Scams</h4>
                  <p className="text-gray-600">
                    Fake job offers requiring advance fee payment or personal information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <Mail className="h-12 w-12 text-security-blue mb-4" />
              <h3 className="text-xl font-bold mb-4">Phishing by Numbers</h3>
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-blue">42%</p>
                  <p className="text-gray-600">Of cyber attacks in India involve phishing</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-red">₹500+ Cr</p>
                  <p className="text-gray-600">Lost annually to phishing scams</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-yellow">156%</p>
                  <p className="text-gray-600">Increase in UPI-related phishing since 2021</p>
                </li>
                <li>
                  <p className="text-3xl font-bold text-security-green">90%</p>
                  <p className="text-gray-600">Of data breaches start with a phishing attack</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-blue hover:bg-security-darkblue" asChild>
                  <Link to="/tools/phishing-simulator">Test Your Phishing Awareness</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">How to Protect Yourself</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Never click on suspicious links in emails or messages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verify the sender's email address carefully</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Don't download attachments from unknown sources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use two-factor authentication for all important accounts</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keep your devices and browsers updated</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use anti-virus and anti-phishing browser extensions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Directly type website URLs instead of clicking links</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Report suspicious emails to your email provider</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Experienced a Phishing Attack?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              If you've fallen victim to a phishing scam, it's important to act quickly.
            </p>
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

export default Phishing;
