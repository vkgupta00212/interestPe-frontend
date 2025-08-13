import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "../hooks/use-toast";
import { FileText, User, Phone, Mail, MapPin, CreditCard } from "lucide-react";

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employment: "",
    monthlyIncome: "",
    loanAmount: "",
    purpose: "",
    panCard: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description:
        "We'll review your application and get back to you within 24 hours.",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl mx-auto shadow-xl rounded-xl bg-white border border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl p-6 text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <FileText className="h-6 w-6" />
            Loan Application
          </CardTitle>
          <p className="text-sm text-blue-100 mt-1">
            Apply for your loan with ease and transparency
          </p>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
                <User className="h-5 w-5 text-blue-500" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-blue-900 font-semibold"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-blue-900 font-semibold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-blue-900 font-semibold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="panCard"
                    className="text-blue-900 font-semibold"
                  >
                    PAN Card Number *
                  </Label>
                  <Input
                    id="panCard"
                    type="text"
                    placeholder="ABCDE1234F"
                    value={formData.panCard}
                    onChange={(e) =>
                      handleInputChange("panCard", e.target.value.toUpperCase())
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label
                    htmlFor="address"
                    className="text-blue-900 font-semibold"
                  >
                    Current Address *
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your current address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Employment & Income */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
                <CreditCard className="h-5 w-5 text-blue-500" />
                Employment & Income
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="employment"
                    className="text-blue-900 font-semibold"
                  >
                    Employment Type *
                  </Label>
                  <Select
                    value={formData.employment}
                    onValueChange={(value) =>
                      handleInputChange("employment", value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200">
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self-employed">
                        Self Employed
                      </SelectItem>
                      <SelectItem value="business">Business Owner</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="monthlyIncome"
                    className="text-blue-900 font-semibold"
                  >
                    Monthly Income *
                  </Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="Enter monthly income"
                    value={formData.monthlyIncome}
                    onChange={(e) =>
                      handleInputChange("monthlyIncome", e.target.value)
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Loan Details */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
                <MapPin className="h-5 w-5 text-blue-500" />
                Loan Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="loanAmount"
                    className="text-blue-900 font-semibold"
                  >
                    Loan Amount *
                  </Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="Enter loan amount"
                    value={formData.loanAmount}
                    onChange={(e) =>
                      handleInputChange("loanAmount", e.target.value)
                    }
                    className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="purpose"
                    className="text-blue-900 font-semibold"
                  >
                    Loan Purpose *
                  </Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) =>
                      handleInputChange("purpose", value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-200 rounded-lg text-blue-900 transition-all duration-200">
                      <SelectValue placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Use</SelectItem>
                      <SelectItem value="medical">Medical Emergency</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="home-improvement">
                        Home Improvement
                      </SelectItem>
                      <SelectItem value="debt-consolidation">
                        Debt Consolidation
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
              <p className="flex gap-2">
                <span className="text-blue-900 font-medium">Note:</span>
                All information will be verified. Ensure accuracy to avoid
                delays.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
