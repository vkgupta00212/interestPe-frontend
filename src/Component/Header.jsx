import { Button } from "./ui/button.jsx";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Menu,
  Phone,
  Calculator,
  FileText,
  User,
  BookOpen,
} from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "Calculator", action: () => scrollToSection("calculator") },
    { label: "Apply", action: () => scrollToSection("apply") },
    { label: "Track Status", action: () => scrollToSection("status") },
    { label: "Khatabook", action: () => scrollToSection("khatabook") },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{
        backgroundColor: "hsl(var(--background) / 0.95)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))",
              }}
            >
              <span className="text-white font-bold text-sm">PE</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-[hsl(var(--primary))]">Interest</span>
              <span className="text-[hsl(var(--foreground))]">Pe</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Support
            </Button>
            <Button size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Logo in Drawer */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))",
                    }}
                  >
                    <span className="text-white font-bold text-xs">PE</span>
                  </div>
                  <span className="font-bold">InterestPe</span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="flex items-center gap-3 text-left p-2 rounded-lg transition-colors hover:bg-[hsl(var(--secondary)/0.5)]"
                    >
                      {item.label === "Calculator" && (
                        <Calculator className="h-4 w-4" />
                      )}
                      {item.label === "Apply" && (
                        <FileText className="h-4 w-4" />
                      )}
                      {item.label === "Track Status" && (
                        <User className="h-4 w-4" />
                      )}
                      {item.label === "Khatabook" && (
                        <BookOpen className="h-4 w-4" />
                      )}
                      {item.label === "Home" && <span className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-3 pt-6 border-t">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Support
                  </Button>
                  <Button className="w-full gap-2">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
