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
    <Card className="w-full max-w-3xl mx-auto rounded-2xl shadow-md border border-border bg-white dark:bg-[hsl(var(--background))]">
      <CardHeader className="rounded-t-2xl p-5 text-center bg-gradient-to-r from-primary to-accent text-white">
        <CardTitle className="flex items-center justify-center gap-2 text-lg font-semibold">
          <FileText className="h-5 w-5" />
          Loan Application
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
              <User className="h-4 w-4" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="panCard">PAN Card Number *</Label>
                <Input
                  id="panCard"
                  type="text"
                  placeholder="ABCDE1234F"
                  value={formData.panCard}
                  onChange={(e) =>
                    handleInputChange("panCard", e.target.value.toUpperCase())
                  }
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Current Address *</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter your current address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          {/* Employment & Income */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
              <CreditCard className="h-4 w-4" />
              Employment & Income
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="employment">Employment Type *</Label>
                <Select
                  value={formData.employment}
                  onValueChange={(value) =>
                    handleInputChange("employment", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaried">Salaried</SelectItem>
                    <SelectItem value="self-employed">Self Employed</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="monthlyIncome">Monthly Income *</Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  placeholder="Enter monthly income"
                  value={formData.monthlyIncome}
                  onChange={(e) =>
                    handleInputChange("monthlyIncome", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </section>

          {/* Loan Details */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" />
              Loan Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Loan Amount *</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={formData.loanAmount}
                  onChange={(e) =>
                    handleInputChange("loanAmount", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="purpose">Loan Purpose *</Label>
                <Select
                  value={formData.purpose}
                  onValueChange={(value) => handleInputChange("purpose", value)}
                >
                  <SelectTrigger>
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
          <div className="bg-muted/20 dark:bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground">
            <p className="flex gap-2">
              <span className="text-primary font-medium">Note:</span>
              All information will be verified. Ensure accuracy to avoid delays.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold tracking-wide"
          >
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
