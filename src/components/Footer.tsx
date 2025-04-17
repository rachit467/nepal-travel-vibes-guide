
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blog-primary">InsightfulBlog</h3>
            <p className="text-muted-foreground">
              Exploring ideas and sharing knowledge through thoughtful content.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/technology" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories/lifestyle" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/categories/health" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link to="/categories/travel" className="text-muted-foreground hover:text-blog-primary transition-colors">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blog-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blog-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blog-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@insightfulblog.com" 
                className="text-muted-foreground hover:text-blog-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border border-border rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blog-primary"
              />
              <button className="bg-blog-primary text-white px-4 py-2 rounded-r-md hover:bg-blog-accent transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} InsightfulBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
