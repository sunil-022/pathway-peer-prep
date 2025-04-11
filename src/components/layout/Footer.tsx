
import { GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-career-light py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCapIcon className="h-6 w-6 text-career-primary" />
              <span className="text-xl font-display font-bold text-career-primary">PathwayPeer</span>
            </div>
            <p className="text-muted-foreground">
              Empowering students to find their path, share resources, and build their future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Jobs & Internships
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Study Resources
                </Link>
              </li>
              <li>
                <Link to="/network" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Networking
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/resume" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/resources/interview" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link to="/resources/career" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-career-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-career-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted">
          <p className="text-center text-muted-foreground">
            © {currentYear} PathwayPeer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
