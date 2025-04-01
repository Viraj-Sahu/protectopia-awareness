
import PageLayout from "@/components/PageLayout";
import { CreditCard, AlertTriangle, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PanMisuse = () => {
  return (
    <PageLayout 
      title="PAN Card Misuse" 
      subtitle="Learn how identity thieves can use your PAN details for financial fraud and how to protect yourself."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">What is PAN Card Misuse?</h2>
              <p className="text-lg mb-6">
                PAN (Permanent Account Number) card misuse occurs when fraudsters obtain your PAN details and use them to 
                commit financial crimes, open accounts, take loans, or evade taxes in your name. As a crucial identification 
                document in India, your PAN links to your financial history and credit record.
              </p>
              
              <div className="bg-security-lightblue p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-security-red" />
                  How Your PAN Card Can Be Misused
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Fraudulent Loans and Credit Cards</p>
                      <p className="text-sm text-gray-600">
                        Criminals can apply for loans or credit cards using your PAN and forged documents.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Shell Companies</p>
                      <p className="text-sm text-gray-600">
                        Your PAN may be used to register shell companies involved in money laundering.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Tax Evasion</p>
                      <p className="text-sm text-gray-600">
                        Fraudsters may conduct high-value transactions under your PAN to evade their own taxes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-security-red mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Fake Investment Accounts</p>
                      <p className="text-sm text-gray-600">
                        Opening stock trading or mutual fund accounts to conduct suspicious transactions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Warning Signs of PAN Misuse</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-security-green pl-4 py-2">
                  <p className="font-medium">Unexpected Tax Notices</p>
                  <p className="text-gray-600">
                    Receiving tax notices for income you never earned or transactions you never made.
                  </p>
                </div>
                <div className="border-l-4 border-security-green pl-4 py-2">
                  <p className="font-medium">Unknown Entries in Form 26AS</p>
                  <p className="text-gray-600">
                    Seeing unfamiliar TDS deductions or income entries in your tax credit statement.
                  </p>
                </div>
                <div className="border-l-4 border-security-green pl-4 py-2">
                  <p className="font-medium">Loan Rejection Due to Poor Credit Score</p>
                  <p className="text-gray-600">
                    Being denied loans despite never missing payments, due to fraudulent loans in your name.
                  </p>
                </div>
                <div className="border-l-4 border-security-green pl-4 py-2">
                  <p className="font-medium">Collection Calls for Unknown Debts</p>
                  <p className="text-gray-600">
                    Receiving calls from collection agencies for loans you never took.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <CreditCard className="h-12 w-12 text-security-green mb-4" />
              <h3 className="text-xl font-bold mb-4">PAN Misuse in Numbers</h3>
              
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-green">17,000+</p>
                  <p className="text-gray-600">Cases of PAN-related fraud reported in 2023</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-red">₹830 Cr</p>
                  <p className="text-gray-600">Estimated losses from PAN misuse annually</p>
                </li>
                <li className="border-b pb-3">
                  <p className="text-3xl font-bold text-security-blue">68%</p>
                  <p className="text-gray-600">Increase in PAN fraud cases since 2021</p>
                </li>
                <li>
                  <p className="text-3xl font-bold text-security-yellow">8-24 months</p>
                  <p className="text-gray-600">Average time to resolve cases of PAN identity theft</p>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full bg-security-green hover:bg-green-700 text-white" asChild>
                  <Link to="/tools/credit-check">Check Your Credit Report</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-bold mb-4">How to Protect Your PAN Card from Misuse</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Never Share PAN Details Online</p>
                    <p className="text-sm text-gray-600">Avoid posting photos of your PAN card on social media or sharing details in unsecured platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Regularly Check Your Tax Credit Statement</p>
                    <p className="text-sm text-gray-600">Monitor Form 26AS at least quarterly for any suspicious entries</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">E-file Your Income Tax Returns</p>
                    <p className="text-sm text-gray-600">File your returns early to prevent fraudsters from filing in your name</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Check Your Credit Report Regularly</p>
                    <p className="text-sm text-gray-600">Review quarterly for any unauthorized accounts or loans</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Verify Before Sharing</p>
                    <p className="text-sm text-gray-600">Only share your PAN with verified, legitimate organizations when legally required</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Secure Physical PAN Card</p>
                    <p className="text-sm text-gray-600">Keep your physical card in a safe place and consider carrying only a photocopy with some details masked</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-security-lightblue p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Steps to Take if Your PAN is Misused</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">1. File an FIR</h4>
                <p className="text-gray-600">
                  Lodge a police complaint at your local police station or through the National Cyber Crime Portal.
                </p>
                <a 
                  href="https://cybercrime.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-security-blue hover:underline mt-2 inline-block"
                >
                  Visit Cyber Crime Portal
                </a>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">2. Contact Income Tax Department</h4>
                <p className="text-gray-600">
                  Report the misuse to the Income Tax Department through their grievance portal.
                </p>
                <a 
                  href="https://www.incometax.gov.in/iec/foportal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-security-blue hover:underline mt-2 inline-block"
                >
                  IT Department Portal
                </a>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">3. Inform Credit Bureaus</h4>
                <p className="text-gray-600">
                  Contact CIBIL and other credit bureaus to place a fraud alert on your credit report.
                </p>
                <a 
                  href="https://www.transunioncibil.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-security-blue hover:underline mt-2 inline-block"
                >
                  CIBIL Website
                </a>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">4. Submit Documentation</h4>
                <p className="text-gray-600">
                  Provide the police FIR, identity proof, and an affidavit to the Income Tax Department and banks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with PAN Card Misuse?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              If you suspect your PAN card is being misused, take immediate action:
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

export default PanMisuse;
