
import PageLayout from "@/components/PageLayout";
import { CreditCard, CheckCircle, AlertTriangle, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CreditCheck = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      toast({
        title: "Credit Report Generated",
        description: "Your credit report has been successfully retrieved.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <PageLayout 
      title="Credit Score Checker" 
      subtitle="Monitor your credit score for signs of identity theft and unauthorized accounts."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              {step === 1 ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Check Your Credit Score</h2>
                  <p className="mb-6 text-gray-600">
                    Monitoring your credit report is one of the most effective ways to detect identity theft. 
                    This tool securely connects with credit bureaus to retrieve your report.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name (as per PAN)</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-security-blue focus:border-security-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                      <input 
                        type="text" 
                        id="pan" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-security-blue focus:border-security-blue"
                        placeholder="ABCDE1234F"
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        title="Enter a valid 10-character PAN"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input 
                        type="date" 
                        id="dob" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-security-blue focus:border-security-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-security-blue focus:border-security-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <input 
                        type="tel" 
                        id="mobile" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-security-blue focus:border-security-blue"
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        required
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I consent to the retrieval of my credit information from credit bureaus for the purpose 
                        of identity theft monitoring. I understand this will not affect my credit score.
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-security-blue hover:bg-security-darkblue" disabled={loading}>
                      {loading ? "Processing..." : "Check My Credit Score"}
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-8 w-8 text-security-blue mr-3" />
                    <h2 className="text-2xl font-bold">Your Credit Report</h2>
                  </div>
                  
                  <div className="mb-8 p-4 bg-security-lightblue rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Your Credit Score</p>
                        <p className="text-3xl font-bold text-security-blue">735</p>
                      </div>
                      <div className="w-32 h-32 relative">
                        <div className="w-full h-full rounded-full bg-gray-200 absolute"></div>
                        <div className="w-full h-full rounded-full absolute" style={{ 
                          background: 'conic-gradient(#1a56db 0% 75%, #e5e7eb 75% 100%)',
                          clipPath: 'circle(50% at center)'
                        }}></div>
                        <div className="w-24 h-24 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                          <span className="text-xl font-bold">Good</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <h3 className="text-xl font-bold">Account Summary</h3>
                    
                    <div className="border-l-4 border-security-green pl-4 py-2">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">No Suspicious Activity Detected</p>
                          <p className="text-sm text-gray-600">
                            We did not find any signs of identity theft in your credit report.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Open Accounts</p>
                        <p className="text-2xl font-bold">4</p>
                        <ul className="mt-2 text-sm text-gray-600">
                          <li>2 Credit Cards</li>
                          <li>1 Home Loan</li>
                          <li>1 Personal Loan</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Recent Credit Inquiries</p>
                        <p className="text-2xl font-bold">1</p>
                        <p className="mt-2 text-sm text-gray-600">
                          HDFC Bank (16 Apr 2023)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Protection Recommendations</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Continue monitoring your credit report quarterly</span>
                      </li>
                      <li className="flex items-start">
                        <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Set up transaction alerts for all your financial accounts</span>
                      </li>
                      <li className="flex items-start">
                        <Info className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Consider enabling fraud alerts with credit bureaus</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Button onClick={() => setStep(1)} variant="outline" className="mr-4">
                      Start a New Check
                    </Button>
                    <Button className="bg-security-blue hover:bg-security-darkblue">
                      Download Full Report
                    </Button>
                  </div>
                </>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-security-lightblue p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Why Check Your Credit?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unauthorized accounts can be opened in your name</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identity thieves may take loans using your PAN</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unusual inquiries can indicate attempted fraud</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sudden drops in score may signal identity theft</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Free Credit Report Sources</h3>
                <p className="text-gray-600 mb-4">
                  By law, you're entitled to one free credit report per year from each bureau.
                </p>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://www.cibil.com/freecibilscore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start text-security-blue hover:underline"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>TransUnion CIBIL</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.experian.in/consumer-credit-report" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start text-security-blue hover:underline"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Experian</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.equifax.co.in/personal/products/credit-score-report" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start text-security-blue hover:underline"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Equifax</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.crif.in/consumers/free-credit-report/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start text-security-blue hover:underline"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>CRIF High Mark</span>
                    </a>
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

export default CreditCheck;
