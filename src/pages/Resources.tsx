
import PageLayout from "@/components/PageLayout";
import { ExternalLink, FileText, Video, Phone, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <PageLayout 
      title="Identity Protection Resources" 
      subtitle="Access official guidelines, educational materials, and emergency contacts."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-security-blue mr-2" />
                Official Government Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://cybercrime.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-security-blue"
                  >
                    <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">National Cyber Crime Portal</p>
                      <p className="text-sm text-gray-600">Report cybercrimes online to Indian authorities</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.rbi.org.in/commonman/English/Scripts/AgainstPhishing.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-security-blue"
                  >
                    <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">RBI Anti-Phishing Guidelines</p>
                      <p className="text-sm text-gray-600">Official guidance on preventing banking fraud</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.meity.gov.in/content/information-security-education-and-awareness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-security-blue"
                  >
                    <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">MeitY Information Security</p>
                      <p className="text-sm text-gray-600">Education and awareness programs</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 text-security-red mr-2" />
                Emergency Contacts
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-1">National Cybercrime Helpline</p>
                  <p className="text-3xl font-bold text-security-red mb-1">1930</p>
                  <p className="text-sm text-gray-600">Report financial fraud and get immediate assistance</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Women's Helpline</p>
                  <p className="text-3xl font-bold text-security-red mb-1">181</p>
                  <p className="text-sm text-gray-600">For women facing online harassment or identity theft</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Emergency Services</p>
                  <p className="text-3xl font-bold text-security-red mb-1">112</p>
                  <p className="text-sm text-gray-600">For immediate police assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Educational Materials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="h-10 w-10 text-security-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Identity Protection Guides</h3>
              <p className="text-gray-600 mb-4">
                Downloadable PDFs with step-by-step instructions to secure your identity.
              </p>
              <Button variant="outline" className="w-full">Download Guides</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Video className="h-10 w-10 text-security-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch instructional videos on recognizing and avoiding identity theft.
              </p>
              <Button variant="outline" className="w-full">Watch Videos</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Info className="h-10 w-10 text-security-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive database of identity protection articles.
              </p>
              <Button variant="outline" className="w-full">Browse Articles</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
