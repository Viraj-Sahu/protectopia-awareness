
import PageLayout from "@/components/PageLayout";
import { Phone, AlertTriangle, CheckCircle, Info, Shield, Search, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CallerVerify = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResults, setSearchResults] = useState<null | {
    status: "safe" | "suspicious" | "dangerous";
    reportCount: number;
    lastReported: string;
    category?: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, certain numbers trigger different results
      if (phoneNumber.endsWith("1111")) {
        setSearchResults({
          status: "dangerous",
          reportCount: 47,
          lastReported: "2 hours ago",
          category: "Banking Fraud"
        });
      } else if (phoneNumber.endsWith("2222")) {
        setSearchResults({
          status: "suspicious",
          reportCount: 8,
          lastReported: "2 days ago",
          category: "Telemarketing"
        });
      } else {
        setSearchResults({
          status: "safe",
          reportCount: 0,
          lastReported: "Never"
        });
      }
      
      setLoading(false);
      toast({
        title: "Number Verification Complete",
        description: "We've checked our database for this phone number.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <PageLayout 
      title="Caller Verification" 
      subtitle="Verify if a phone number has been reported for scam or fraud activities."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-6">
                  <Search className="h-6 w-6 text-security-blue mr-3" />
                  <h2 className="text-2xl font-bold">Verify a Phone Number</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="mb-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">
                      <span className="text-gray-500">+91</span>
                    </div>
                    <input 
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="flex-grow p-2 border border-gray-300 focus:ring-security-blue focus:border-security-blue"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").substring(0, 10))}
                    />
                    <Button 
                      type="submit" 
                      className="bg-security-blue hover:bg-security-darkblue rounded-l-none"
                      disabled={loading || phoneNumber.length !== 10}
                    >
                      {loading ? "Searching..." : "Verify Number"}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    For testing: Try ending with 1111 for "dangerous" or 2222 for "suspicious" results
                  </p>
                </form>
                
                {searchResults && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    searchResults.status === "dangerous" ? "bg-red-50" : 
                    searchResults.status === "suspicious" ? "bg-yellow-50" : "bg-green-50"
                  }`}>
                    <div className="flex items-start">
                      {searchResults.status === "dangerous" ? (
                        <XCircle className="h-6 w-6 text-security-red mr-3 mt-0.5" />
                      ) : searchResults.status === "suspicious" ? (
                        <AlertTriangle className="h-6 w-6 text-security-yellow mr-3 mt-0.5" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-security-green mr-3 mt-0.5" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold mb-1">
                          {searchResults.status === "dangerous" ? "High Risk Number" : 
                           searchResults.status === "suspicious" ? "Potentially Suspicious" : "No Reports Found"}
                        </h3>
                        <p className={`${
                          searchResults.status === "dangerous" ? "text-red-800" : 
                          searchResults.status === "suspicious" ? "text-yellow-800" : "text-green-800"
                        }`}>
                          {searchResults.status === "dangerous" ? 
                            "This number has been reported multiple times for scam activity." : 
                           searchResults.status === "suspicious" ? 
                            "This number has some reports of suspicious activity." : 
                            "This number has not been reported for any suspicious activity."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {searchResults && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Verification Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Number of Reports</p>
                        <p className={`text-2xl font-bold ${
                          searchResults.reportCount > 10 ? "text-security-red" : 
                          searchResults.reportCount > 0 ? "text-security-yellow" : "text-security-green"
                        }`}>
                          {searchResults.reportCount}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Last Reported</p>
                        <p className="text-2xl font-bold">
                          {searchResults.lastReported}
                        </p>
                      </div>
                      
                      {searchResults.category && (
                        <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                          <p className="text-sm text-gray-600">Reported Category</p>
                          <p className="text-2xl font-bold">
                            {searchResults.category}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {searchResults.status !== "safe" && (
                      <div className="bg-security-lightblue p-4 rounded-lg mb-6">
                        <h4 className="font-bold mb-2">Recommended Actions:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                            <span>Do not share personal or financial information with this caller</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                            <span>Block this number on your phone</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                            <span>If you've already interacted with this number, monitor your accounts for suspicious activity</span>
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" onClick={() => {
                        setPhoneNumber("");
                        setSearchResults(null);
                      }}>
                        Check Another Number
                      </Button>
                      
                      <Button 
                        className="bg-security-red hover:bg-red-700"
                        onClick={() => {
                          toast({
                            title: "Report Submitted",
                            description: "Thank you for reporting this number. We'll add it to our database.",
                            variant: "default",
                          });
                        }}
                      >
                        Report This Number
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-security-blue mr-2" />
                  <h3 className="text-xl font-bold">About This Tool</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our database contains reports from thousands of users across India who have encountered 
                  scam calls. We use this collective intelligence to help identify potentially dangerous numbers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Updated daily with new reports</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tracks scam patterns across India</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Categorizes numbers by scam type</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-security-lightblue p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Common Scam Call Categories</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold text-security-blue">Banking Fraud</h4>
                    <p className="text-sm text-gray-600">
                      Callers pretending to be from your bank claiming issues with your account or KYC.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-security-blue">Government Impersonation</h4>
                    <p className="text-sm text-gray-600">
                      Scammers claiming to be from tax authorities, police, or other agencies.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-security-blue">Technical Support</h4>
                    <p className="text-sm text-gray-600">
                      Fake tech support claiming your device is infected or compromised.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold text-security-blue">Investment Scams</h4>
                    <p className="text-sm text-gray-600">
                      Promises of unrealistic returns on investments in stocks, crypto, or other assets.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What to Do If You Receive a Scam Call</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="h-10 w-10 text-security-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">During the Call</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Don't share personal information, OTPs, or account details</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ask for the caller's name, employee ID, and department</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inform them you'll call back on the official number</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-10 w-10 text-security-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">After the Call</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Block the number on your phone</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Report the number using our tool</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contact the real organization using official numbers</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-10 w-10 text-security-red mb-4" />
                <h3 className="text-xl font-bold mb-3">If You've Been Scammed</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contact your bank immediately to report fraud</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Call 1930 (Cyber Crime Helpline)</span>
                  </li>
                  <li className="flex items-start">
                    <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>File a complaint at cybercrime.gov.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CallerVerify;
