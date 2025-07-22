import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Calculator, IndianRupee } from "lucide-react";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [tenure, setTenure] = useState(12);
  const [interestRate] = useState(12); // Fixed interest rate

  const calculateEMI = () => {
    const monthlyRate = interestRate / (12 * 100);
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  const totalAmount = calculateEMI() * tenure;
  const totalInterest = totalAmount - loanAmount;

  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-md border border-border bg-white dark:bg-[hsl(var(--background))] transition">
      <CardHeader
        className="text-center p-5 rounded-t-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
          color: "white",
        }}
      >
        <CardTitle className="flex items-center justify-center gap-2 text-lg font-semibold">
          <Calculator className="h-5 w-5" />
          Loan Calculator
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Loan Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-sm font-medium">
            Loan Amount
          </Label>
          <div className="flex items-center gap-2 mt-1">
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
            <Input
              id="amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="flex-1"
            />
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            max={1000000}
            min={10000}
            step={10000}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹10K</span>
            <span>₹10L</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="space-y-2">
          <Label htmlFor="tenure" className="text-sm font-medium">
            Tenure (Months)
          </Label>
          <Input
            id="tenure"
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          />
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            max={60}
            min={3}
            step={1}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>3 months</span>
            <span>5 years</span>
          </div>
        </div>

        {/* EMI Results */}
        <div className="rounded-xl bg-[hsl(var(--muted)/0.2)] dark:bg-secondary/50 p-4 space-y-3 text-sm">
          <div className="flex justify-between items-center font-medium">
            <span>Monthly EMI</span>
            <span className="text-lg font-bold text-primary">
              ₹{calculateEMI().toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Interest</span>
            <span className="font-semibold">
              ₹{totalInterest.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Amount</span>
            <span className="font-semibold">
              ₹{totalAmount.toLocaleString()}
            </span>
          </div>
        </div>

        <Button className="w-full text-white text-sm font-semibold" size="lg">
          Apply for This Loan
        </Button>
      </CardContent>
    </Card>
  );
};
