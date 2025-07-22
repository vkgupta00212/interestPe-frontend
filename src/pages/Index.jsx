import React from "react";
import { Header } from "../Component/Header.jsx";
import { HeroSection } from "../Component/HeroSection.jsx";
import { LoanCalculator } from "../Component/LoanCalculator.jsx";
import { ApplicationForm } from "../Component/ApplicationForm.jsx";
import { StatusTracker } from "../Component/StatusTracker.jsx";
import { KhatabookSection } from "../Component/KhatabookSection.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Loan Calculator Section */}
      <section id="calculator" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculate Your EMI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our easy EMI calculator to plan your loan better. Get instant
              results and make informed decisions about your loan amount and
              tenure.
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply for Personal Loan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out our simple application form and get approved in minutes.
              We've made the process as smooth and transparent as possible.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* Status Tracking Section */}
      <section id="status" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Track Your Application</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated on your loan application status. Track every step of
              the process from submission to disbursement.
            </p>
          </div>
          <StatusTracker />
        </div>
      </section>

      {/* Khatabook Section */}
      <section id="khatabook" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Digital Khatabook</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage your business finances effortlessly. Track transactions,
              manage customers, and get insights to grow your business.
            </p>
          </div>
          <KhatabookSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PE</span>
                </div>
                <span className="text-xl font-bold">InterestPe</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Making personal loans simple, transparent, and accessible for
                everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#calculator"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    EMI Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#apply"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Track Status
                  </a>
                </li>
                <li>
                  <a
                    href="#khatabook"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Digital Khatabook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>📞 +91 12345 67890</li>
                <li>✉️ support@interestpe.com</li>
                <li>🕒 Mon-Fri: 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 InterestPe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
