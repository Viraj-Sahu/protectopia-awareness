
import PageLayout from "@/components/PageLayout";
import { Shield, AlertTriangle, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Deepfake = () => {
  return (
    <PageLayout 
      title="Deepfake Scams" 
      subtitle="Learn how AI-generated content is being used to impersonate people and commit fraud."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">What are Deepfake Scams?</h2>
              <p className="text-lg mb-6">
                Deepfakes use artificial intelligence to create convincing fake videos, audio, or images of real people 
                saying or doing things they never did. Scammers use this technology to impersonate family members, 
                friends, or authority figures to trick victims into sending money or sharing sensitive information.
              </p>
              
              <div className="bg-security-lightblue p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-security-red" />
                  Common Deepfake Scams in India
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Video Call Impersonation</p>
                      <p className="text-sm text-gray-600">
                        Scammers create deepfake videos of family members claiming to be in emergencies and needing money.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Voice Cloning Fraud</p>
                      <p className="text-sm text-gray-600">
                        AI-generated voice calls that sound exactly like a family member or boss requesting urgent fund transfers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Celebrity Endorsement Scams</p>
                      <p className="text-sm text-gray-600">
                        Fake videos of celebrities promoting fraudulent investment schemes or products.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Government Official Impersonation</p>
                      <p className="text-sm text-gray-600">
                        Deepfakes of government officials demanding payments or sensitive information.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Real-Life Examples</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-security-yellow pl-4 py-2">
                  <h4 className="font-bold">The Delhi Family Case</h4>
                  <p className="text-gray-600">
                    A Delhi family lost ₹5 lakh after receiving a deepfake video call that appeared to be from their 
                    son studying abroad, claiming he had been in an accident and needed money for treatment.
                  </p>
                </div>
                <div className="border-l-4 border-security-yellow pl-4 py-2">
                  <h4 className="font-bold">Corporate Voice Clone Attack</h4>
                  <p className="text-gray-600">
                    A Mumbai company's finance executive transferred ₹27 lakh after receiving what seemed to be a 
                    genuine call from the CEO requesting an urgent payment to a vendor.
                  </p>
                </div>
                <div className="border-l-4 border-security-yellow pl-4 py-2">
                  <h4 className="font-bold">Fake Celebrity Investment Scam</h4>
                  <p className="text-gray-600">
                    Thousands of Indians lost money in a crypto investment scheme that used deepfake videos of 
                    Bollywood celebrities falsely endorsing the platform.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <Shield className="h-12 w-12 text-security-yellow mb-4" />
              <h3 className="text-xl font-bold mb-4">Deepfake Threats Growing</h3>
              
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-yellow">400%</p>
                  <p className="text-gray-600">Increase in deepfake-related scams in India since 2021</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-red">96%</p>
                  <p className="text-gray-600">Of deepfakes are created for fraudulent purposes</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-blue">₹50+ Cr</p>
                  <p className="text-gray-600">Estimated losses to deepfake scams in 2023</p>
                </li>
                <li>
                  <p className="text-3xl font-bold text-security-green">5-15 sec</p>
                  <p className="text-gray-600">Of voice sample needed to create a convincing voice clone</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-yellow hover:bg-yellow-600 text-white" asChild>
                  <Link to="/tools/phishing-simulator">Test Your Awareness</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">How to Detect Deepfakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Signs of Video Deepfakes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unnatural eye movements or blinking patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Odd facial proportions or skin textures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inconsistent lighting or shadows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blurry or changing background elements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Signs of Audio Deepfakes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unnatural pauses or breathing patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Robotic or metallic sound quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Missing background noises typical for the person</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inconsistent speech patterns or word choices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Protect Yourself from Deepfake Scams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Verify Through Another Channel</h4>
                <p className="text-gray-600">
                  If you receive a suspicious call or video from a family member or colleague, hang up and contact them 
                  through a different, verified method.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Establish a Security Passphrase</h4>
                <p className="text-gray-600">
                  Create a secret word or phrase with family members that can be used to verify identity during 
                  suspicious calls.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Be Skeptical of Urgent Requests</h4>
                <p className="text-gray-600">
                  Be wary of any urgent request for money or sensitive information, even if it seems to come from someone you know.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Use Secure Video Platforms</h4>
                <p className="text-gray-600">
                  For important video calls, use secure platforms with end-to-end encryption and verified accounts.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Limit Public Voice Samples</h4>
                <p className="text-gray-600">
                  Be cautious about publishing your voice or video content publicly, especially lengthy samples.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Use Deepfake Detection Tools</h4>
                <p className="text-gray-600">
                  Consider using available AI-powered tools that can help detect manipulated media.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Been a Victim of a Deepfake Scam?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              If you've been defrauded by a deepfake scam, take these steps:
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

export default Deepfake;
