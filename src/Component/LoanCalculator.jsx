import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Calculator, IndianRupee, Percent } from "lucide-react";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [effectiveInterestRate, setEffectiveInterestRate] = useState(null);

  const calculateEMI = () => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayment(null);
      setEffectiveInterestRate(null);
      return;
    }

    const principal = loanAmount;
    const rate = interestRate / 12 / 100; // Monthly rate
    const n = loanTerm * 12; // Total months

    const emiCalc =
      (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

    const totalPay = emiCalc * n;
    const totalInt = totalPay - principal;
    const effectiveIntRate = (totalInt / principal / loanTerm) * 100;

    setEmi(emiCalc.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
    setEffectiveInterestRate(effectiveIntRate.toFixed(2));
  };

  // Use effect to recalculate EMI whenever inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="min-h-screen bg-inherit flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-xl bg-white border border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl p-6">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold">
            <Calculator size={24} /> interestPe Loan Calculator
          </CardTitle>
          <p className="text-sm text-blue-100 mt-1">
            Befikar lending for your financial needs
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Input Section */}
            <div className="flex-1 space-y-6">
              {/* Loan Amount */}
              <div>
                <Label className="flex items-center gap-2 text-blue-900 font-semibold">
                  <IndianRupee size={16} /> Loan Amount (₹)
                </Label>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  min="0"
                />
                <Slider
                  min={50000}
                  max={5000000}
                  step={10000}
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full [&>span]:bg-white [&>span]:border-2 [&>span]:border-blue-600"
                />
                <span className="text-sm text-blue-700">
                  ₹{loanAmount.toLocaleString()}
                </span>
              </div>

              {/* Interest Rate */}
              <div>
                <Label className="flex items-center gap-2 text-blue-900 font-semibold">
                  <Percent size={16} /> Interest Rate (% p.a.)
                </Label>
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  min="0"
                  step="0.1"
                />
                <Slider
                  min={1}
                  max={20}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full [&>span]:bg-white [&>span]:border-2 [&>span]:border-blue-600"
                />
                <span className="text-sm text-blue-700">{interestRate}%</span>
              </div>

              {/* Loan Term */}
              <div>
                <Label className="text-blue-900 font-semibold">
                  Loan Term (Years)
                </Label>
                <Input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                  min="0"
                />
                <Slider
                  min={1}
                  max={30}
                  step={1}
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full [&>span]:bg-white [&>span]:border-2 [&>span]:border-blue-600"
                />
                <span className="text-sm text-blue-700">{loanTerm} Years</span>
              </div>
            </div>

            {/* Results Section */}
            <div className="flex-1 bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Loan Summary
              </h3>
              {emi ? (
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-blue-900">
                      Monthly EMI:
                    </span>
                    <span className="text-blue-700 font-medium">
                      ₹{Number(emi).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-blue-900">
                      Total Interest:
                    </span>
                    <span className="text-blue-700 font-medium">
                      ₹{Number(totalInterest).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-blue-900">
                      Total Payment:
                    </span>
                    <span className="text-blue-700 font-medium">
                      ₹{Number(totalPayment).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-blue-900">
                      Effective Interest Rate (p.a.):
                    </span>
                    <span className="text-blue-700 font-medium">
                      {effectiveInterestRate}%
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-blue-700 text-sm">
                  Enter valid values to see results
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanCalculator;
