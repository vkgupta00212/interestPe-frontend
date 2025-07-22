import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Shield, Zap, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, hsl(var(--primary)/0.05), hsl(var(--background)), hsl(var(--accent)/0.05))",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, hsl(var(--primary)/0.1), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 80%, hsl(var(--accent)/0.1), transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Befikar</span> Lending
                <br />
                <span className="text-[hsl(var(--foreground))]">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-lg">
                Get instant personal loans with minimal documentation. No hidden
                charges, transparent process, quick approval.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 px-8 shadow-lg hover:cursor-pointer"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 hover:cursor-pointer"
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
                  <Icon className="h-5 w-5 text-[hsl(var(--success))]" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card
                className="p-6 border"
                style={{
                  background:
                    "linear-gradient(to bottom right, hsl(var(--primary)/0.1), hsl(var(--primary)/0.05))",
                  borderColor: "hsl(var(--primary)/0.2)",
                }}
              >
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                    2 Minutes
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Application Time
                  </div>
                </CardContent>
              </Card>

              <Card
                className="p-6 border"
                style={{
                  background:
                    "linear-gradient(to bottom right, hsl(var(--accent)/0.1), hsl(var(--accent)/0.05))",
                  borderColor: "hsl(var(--accent)/0.2)",
                }}
              >
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--accent))]">
                    ₹10 Lakhs
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Max Loan Amount
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card
              className="p-8 shadow"
              style={{
                background:
                  "linear-gradient(to bottom right, hsl(var(--card)), hsl(var(--secondary)/0.3))",
                boxShadow: "var(--shadow-elegant)",
              }}
            >
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "No collateral required",
                    "Flexible repayment options",
                    "Competitive interest rates",
                    "24/7 customer support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
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
