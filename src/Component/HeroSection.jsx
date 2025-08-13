import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Shield, Zap, Users } from "lucide-react";
import bg from "../assets/background.png";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background decoration overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15), transparent 50%)",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                <span className="text-blue-500">Befikar</span> Lending
                <br />
                <span>Made Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-700 max-w-lg">
                Secure instant personal loans with minimal documentation.
                Transparent process, no hidden charges, and quick approval.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 px-8 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-blue-400 text-blue-900 hover:bg-blue-200 hover:text-blue-900 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              >
                Calculate EMI
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { Icon: CheckCircle, text: "Instant Approval" },
                { Icon: Shield, text: "100% Secure" },
                { Icon: Zap, text: "Quick Disbursal" },
                { Icon: Users, text: "10L+ Happy Users" },
              ].map(({ Icon, text }, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-blue-900">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border border-blue-200 bg-white shadow-md rounded-lg">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-blue-900">
                    2 Minutes
                  </div>
                  <div className="text-sm text-blue-700">Application Time</div>
                </CardContent>
              </Card>

              <Card
                className="p-6 border border-blue-200 bg-blue-50"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",
                }}
              >
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-blue-500">
                    ₹10 Lakhs
                  </div>
                  <div className="text-sm text-blue-700">Max Loan Amount</div>
                </CardContent>
              </Card>
            </div>

            <Card
              className="p-8 bg-white border border-blue-200 shadow-lg rounded-lg"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(59, 130, 246, 0.1))",
              }}
            >
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold text-blue-900">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-sm text-blue-700">
                  {[
                    "No collateral required",
                    "Flexible repayment options",
                    "Competitive interest rates",
                    "24/7 customer support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
