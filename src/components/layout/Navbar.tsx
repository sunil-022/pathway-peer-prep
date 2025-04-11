
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BriefcaseIcon, GraduationCapIcon, SearchIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCapIcon className="h-6 w-6 text-career-primary" />
          <Link to="/" className="text-xl font-display font-bold text-career-primary">
            PathwayPeer
          </Link>
        </div>
        
        <div className="hidden md:flex md:flex-1 mx-6">
          <div className="relative w-full max-w-sm">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search jobs, resources, and more..." 
              className="pl-10 w-full"
            />
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <Link 
            to="/jobs" 
            className="hidden md:flex text-sm font-medium text-muted-foreground hover:text-career-primary transition-colors"
          >
            Jobs
          </Link>
          <Link 
            to="/resources" 
            className="hidden md:flex text-sm font-medium text-muted-foreground hover:text-career-primary transition-colors"
          >
            Resources
          </Link>
          <Link 
            to="/network" 
            className="hidden md:flex text-sm font-medium text-muted-foreground hover:text-career-primary transition-colors"
          >
            Network
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex">
            <UserIcon className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button className="hidden md:flex" variant="default">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <UserIcon className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};
