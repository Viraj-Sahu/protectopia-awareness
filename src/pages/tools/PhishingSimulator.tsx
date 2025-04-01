
import PageLayout from "@/components/PageLayout";
import { Mail, AlertTriangle, CheckCircle, XCircle, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: number;
  image: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    image: "placeholder.svg",
    question: "Is this email from SBI Bank legitimate?",
    options: [
      "Yes, it's a genuine SBI email",
      "No, it's a phishing attempt"
    ],
    correctAnswer: 1,
    explanation: "This is a phishing email. Note the sender address is 'sbi-secure@mail-sbi.co' instead of an official SBI domain. The urgent language and threat of account suspension are common phishing tactics."
  },
  {
    id: 2,
    image: "placeholder.svg",
    question: "Is this Aadhaar verification message authentic?",
    options: [
      "Yes, it's from UIDAI",
      "No, it's a scam message"
    ],
    correctAnswer: 1,
    explanation: "This is a scam. UIDAI never sends SMS requesting to update Aadhaar via links. The suspicious URL and urgency are clear red flags."
  },
  {
    id: 3,
    image: "placeholder.svg",
    question: "Is this email about GST filing deadline legitimate?",
    options: [
      "Yes, it's from the GST department",
      "No, it's a phishing attempt"
    ],
    correctAnswer: 0,
    explanation: "This appears to be legitimate. The sender domain is 'gst.gov.in', which is the official GST portal, and the message doesn't ask for personal information or contain suspicious links."
  }
];

const PhishingSimulator = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleStartQuiz = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    const isCorrect = index === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "Good job spotting the phishing signs.",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "This answer isn't right. See the explanation below.",
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <PageLayout 
      title="Phishing Simulator" 
      subtitle="Test your ability to identify phishing emails with our interactive quiz."
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          {!started ? (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-security-blue mr-3" />
                <h2 className="text-2xl font-bold">Phishing Awareness Quiz</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Test your ability to identify phishing attempts with our interactive simulator. We'll show you 
                real examples of phishing emails and messages, and you'll need to determine which ones are legitimate 
                and which are scams.
              </p>
              
              <div className="bg-security-lightblue p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Why This Matters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-security-blue">76%</p>
                    <p className="text-gray-600">Of Indian organizations faced phishing attacks in 2023</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-security-blue">92%</p>
                    <p className="text-gray-600">Of data breaches involve phishing</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>How to identify suspicious sender addresses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Common language tactics used by scammers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>How to spot fake URLs and website addresses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-security-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Red flags in messages requesting personal information</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                className="w-full bg-security-blue hover:bg-security-darkblue"
                onClick={handleStartQuiz}
              >
                Start the Quiz
              </Button>
            </div>
          ) : completed ? (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <Shield className="h-16 w-16 text-security-blue mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              </div>
              
              <div className="bg-security-lightblue p-6 rounded-lg text-center mb-8">
                <p className="text-lg mb-2">Your Score</p>
                <p className="text-4xl font-bold text-security-blue mb-2">{score}/{questions.length}</p>
                <p className="text-gray-600">
                  {score === questions.length ? 
                    "Excellent! You're a phishing detection expert." : 
                   score >= questions.length / 2 ? 
                    "Good job! You can spot most phishing attempts." : 
                    "Keep practicing. Spotting phishing attempts takes time and awareness."}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Always Check Sender Addresses</p>
                      <p className="text-sm text-gray-600">
                        Legitimate organizations use their official domains, not public email services or similar-looking domains.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Be Suspicious of Urgency</p>
                      <p className="text-sm text-gray-600">
                        Phishing attempts often create artificial urgency to pressure you into acting quickly without thinking.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-security-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Verify Before Clicking</p>
                      <p className="text-sm text-gray-600">
                        Hover over links to see the actual URL destination, and contact organizations directly through official channels.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleStartQuiz}
                  variant="outline" 
                  className="flex-1"
                >
                  Take the Quiz Again
                </Button>
                <Button 
                  className="bg-security-blue hover:bg-security-darkblue flex-1"
                  asChild
                >
                  <Link to="/learn/phishing">
                    Learn More About Phishing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Question {currentQuestion + 1} of {questions.length}</h2>
                <div className="bg-security-lightblue px-4 py-2 rounded-lg">
                  <p className="font-bold">Score: {score}/{currentQuestion + (answered ? 1 : 0)}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src={questions[currentQuestion].image} 
                  alt="Phishing example" 
                  className="w-full h-64 object-cover rounded-lg border border-gray-200 mb-4" 
                />
                <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button 
                      key={index}
                      className={`w-full p-4 rounded-lg border text-left transition ${
                        selectedAnswer === null ? "border-gray-200 hover:border-security-blue" :
                        selectedAnswer === index ? 
                          (index === questions[currentQuestion].correctAnswer ? 
                            "border-security-green bg-green-50" : 
                            "border-security-red bg-red-50") :
                          index === questions[currentQuestion].correctAnswer && answered ?
                            "border-security-green bg-green-50" :
                            "border-gray-200 opacity-50"
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={answered}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              {answered && (
                <div className={`p-4 rounded-lg mb-6 ${
                  selectedAnswer === questions[currentQuestion].correctAnswer ? 
                    "bg-green-50 border-l-4 border-security-green" : 
                    "bg-red-50 border-l-4 border-security-red"
                }`}>
                  <div className="flex items-start">
                    {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                      <CheckCircle className="h-6 w-6 text-security-green mr-3 mt-0.5" />
                    ) : (
                      <XCircle className="h-6 w-6 text-security-red mr-3 mt-0.5" />
                    )}
                    <div>
                      <h4 className="font-bold mb-1">
                        {selectedAnswer === questions[currentQuestion].correctAnswer ? 
                          "Correct!" : "That's not right"}
                      </h4>
                      <p className="text-gray-600">{questions[currentQuestion].explanation}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setStarted(false);
                    setCurrentQuestion(0);
                    setScore(0);
                  }}
                >
                  Quit Quiz
                </Button>
                
                {answered && (
                  <Button 
                    className="bg-security-blue hover:bg-security-darkblue"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default PhishingSimulator;

import { Link } from "react-router-dom";

