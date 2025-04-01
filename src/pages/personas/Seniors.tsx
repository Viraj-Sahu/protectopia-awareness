
import PageLayout from "@/components/PageLayout";
import { Phone, Shield, AlertTriangle, CheckCircle, User, CreditCard, Video, ExternalLink, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Seniors = () => {
  return (
    <PageLayout 
      title="Identity Protection for Seniors" 
      subtitle="Simple strategies to protect yourself from targeted scams."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-security-lightblue h-14 w-14 rounded-full flex items-center justify-center mr-4">
                    <User className="h-7 w-7 text-security-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Meet Ramesh</h2>
                    <p className="text-gray-600">
                      Ramesh is a 68-year-old retired government employee who has recently started using a smartphone 
                      and digital payment apps. He receives his pension electronically and manages his savings through 
                      online banking.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-security-blue pl-4 py-3 mb-6">
                  <p className="italic text-gray-600">
                    "I received a video call from someone claiming to be my son who lives abroad. He looked a bit 
                    different but said he was using a new phone. He said he was in an emergency and needed money. 
                    I was about to transfer funds when my daughter visited and recognized it was a deepfake scam."
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Common Threats Targeting Seniors</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Pension and Insurance Scams</p>
                      <p className="text-sm text-gray-600">Fraudsters claiming issues with pension payments or offering fake insurance schemes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Impersonation Calls</p>
                      <p className="text-sm text-gray-600">Scammers pretending to be relatives, bank officials, or government representatives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technical Support Fraud</p>
                      <p className="text-sm text-gray-600">Fake tech support agents claiming to fix non-existent computer or phone problems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Medical Identity Theft</p>
                      <p className="text-sm text-gray-600">Criminals using seniors' information to obtain medical services or prescription drugs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-security-lightblue p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Senior Identity Theft Facts</h3>
              <ul className="space-y-4">
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">67%</p>
                  <p className="text-gray-600">Higher financial losses for seniors compared to other age groups</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">₹18,600 Cr</p>
                  <p className="text-gray-600">Estimated annual losses to senior-targeted scams in India</p>
                </li>
                <li className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-security-blue">43%</p>
                  <p className="text-gray-600">Of seniors report being targeted by phone scams monthly</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-blue hover:bg-security-darkblue">
                  Download Senior Security Guide
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Simple Protection Strategies for Seniors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone Safety</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Never share OTPs or banking details over the phone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Let unknown calls go to voicemail first</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use a call blocking app to filter spam calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verify callers by hanging up and calling official numbers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deepfake Awareness</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Establish a secret code word with family members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verify emergency requests through a different channel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Be suspicious of unusual video call quality or behavior</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Never make urgent financial decisions during video calls</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-security-lightblue flex items-center justify-center text-security-blue">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Safety</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Set low transaction limits on digital payment apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enable SMS or email alerts for all bank transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check bank and pension statements monthly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Consider adding a trusted family member to accounts</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">Common Scams Targeting Seniors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Warning Signs to Watch For:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Callers creating panic about pensions or benefits</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Requests for immediate payment through gift cards or UPI</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>"Winners" of contests you never entered</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unknown callers asking for remote access to your devices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Remember:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Government agencies never call demanding immediate payment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Banks never ask for your complete password or PIN</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>It's okay to hang up and verify through official channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consult with family members before making financial decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Device Security Made Simple</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Smartphone Security</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use biometric lock (fingerprint or face recognition)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Only download apps from official app stores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Keep your phone's operating system updated</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Be cautious of links in messages, even from known contacts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Computer Security</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use a password to protect your computer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Install and maintain antivirus software</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Be skeptical of pop-ups and unexpected windows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Never allow remote access unless you initiated technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Senior-Specific Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/tools/caller-verify" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Verify Suspicious Calls</p>
                  <p className="text-sm text-white/80">Check if a phone number has been reported for scams</p>
                </div>
              </Link>
              <a 
                href="https://www.meity.gov.in/content/senior-citizen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Digital Literacy for Seniors</p>
                  <p className="text-sm text-white/80">Government programs for digital education</p>
                </div>
              </a>
              <a 
                href="https://digitalindia.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex items-start"
              >
                <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Digital India Resources</p>
                  <p className="text-sm text-white/80">Simplified guides for digital safety</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Seniors;
