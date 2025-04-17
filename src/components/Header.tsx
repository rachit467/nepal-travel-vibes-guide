
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-blog-primary">
            Insightful<span className="text-blog-accent">Blog</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-blog-primary transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-foreground hover:text-blog-primary transition-colors">
            Categories
          </Link>
          <Link to="/about" className="text-foreground hover:text-blog-primary transition-colors">
            About
          </Link>
          <Button variant="ghost" size="icon" className="ml-2">
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-background border-b border-border md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container py-4 space-y-4">
          <Link
            to="/"
            className="block py-2 text-foreground hover:text-blog-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="block py-2 text-foreground hover:text-blog-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="block py-2 text-foreground hover:text-blog-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pr-10 border border-border rounded-md"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
